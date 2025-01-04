import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the URL parameters
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (!code) {
          throw new Error('No code provided');
        }

        // Exchange the code for a session
        const { data, error } = await supabase.auth.exchangeCodeForSession(code);
        
        if (error) throw error;
        
        if (data.session) {
          const { user } = data.session;
          console.log('Full user object:', user); // Debug log
          console.log('User metadata:', user.user_metadata); // Debug log
          console.log('App metadata:', user.app_metadata); // Debug log

          if (user?.app_metadata?.provider === 'discord') {
            // Get the Discord ID from the raw user metadata
            const discordId = user.user_metadata.provider_id || user.user_metadata.sub;
            const username = user.user_metadata.full_name || user.user_metadata.name || user.user_metadata.email;
            const avatarUrl = user.user_metadata.avatar_url;

            console.log('Discord ID:', discordId); // Debug log
            console.log('Username:', username); // Debug log
            console.log('Avatar URL:', avatarUrl); // Debug log

            const { error: updateError } = await supabase
              .from('profiles')
              .update({
                discord_id: discordId,
                avatar_url: avatarUrl,
                username: username
              })
              .eq('id', user.id);

            if (updateError) {
              console.error('Error updating profile:', updateError);
            }
          }

          toast({
            title: "Successfully authenticated",
            description: "Welcome back!"
          });
          navigate('/');
        }
      } catch (error) {
        console.error('Error during auth callback:', error);
        toast({
          title: "Authentication error",
          description: "There was a problem signing you in. Please try again.",
          variant: "destructive"
        });
        navigate('/auth');
      }
    };

    handleCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default AuthCallback;