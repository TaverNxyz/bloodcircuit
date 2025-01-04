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
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (!code) {
          throw new Error('No code provided');
        }

        const { data, error } = await supabase.auth.exchangeCodeForSession(code);
        
        if (error) throw error;
        
        if (data.session) {
          const { user } = data.session;
          console.log('Full user object:', user);
          console.log('Raw user metadata:', user.user_metadata);
          
          if (user?.app_metadata?.provider === 'discord') {
            // Discord ID is stored in different places depending on the OAuth response
            const discordId = user.user_metadata.provider_id || 
                            user.user_metadata.sub || 
                            user.user_metadata.custom_claims?.discord_id ||
                            user.user_metadata.discord_id;
                            
            const username = user.user_metadata.custom_claims?.global_name || 
                           user.user_metadata.global_name ||
                           user.user_metadata.full_name || 
                           user.user_metadata.name || 
                           user.user_metadata.email;
                           
            const avatarUrl = user.user_metadata.avatar_url;

            console.log('Extracted Discord data:', {
              discordId,
              username,
              avatarUrl
            });

            if (discordId) {
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
                throw updateError;
              }
            } else {
              console.error('Could not extract Discord ID from user metadata');
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