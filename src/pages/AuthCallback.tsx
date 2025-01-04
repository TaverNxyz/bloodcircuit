import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        console.log('Starting auth callback with code:', code ? 'Present' : 'Missing');

        if (!code) {
          throw new Error('No code provided');
        }

        console.log('Exchanging code for session...');
        const { data, error } = await supabase.auth.exchangeCodeForSession(code);
        
        if (error) {
          console.error('Session exchange error:', error);
          throw error;
        }
        
        if (data.session) {
          const { user } = data.session;
          console.log('Authentication successful!');
          console.log('User ID:', user.id);
          console.log('Provider:', user.app_metadata?.provider);
          console.log('Full user metadata:', JSON.stringify(user.user_metadata, null, 2));
          
          if (user?.app_metadata?.provider === 'discord') {
            console.log('Discord authentication detected');
            
            // Try all possible locations for Discord ID
            const discordId = 
              user.user_metadata.sub || // Primary location
              user.user_metadata.provider_id ||
              user.identities?.[0]?.id ||
              user.user_metadata.custom_claims?.sub;
            
            // Try all possible locations for username
            const username = 
              user.user_metadata.custom_claims?.global_name ||
              user.user_metadata.global_name ||
              user.user_metadata.full_name ||
              user.user_metadata.preferred_username ||
              user.user_metadata.email;
            
            const avatarUrl = user.user_metadata.avatar_url;

            console.log('Extracted Discord data:', {
              discordId,
              username,
              avatarUrl
            });

            if (discordId) {
              console.log('Updating profile with Discord ID:', discordId);
              const { error: updateError } = await supabase
                .from('profiles')
                .update({
                  discord_id: discordId,
                  avatar_url: avatarUrl,
                  username: username
                })
                .eq('id', user.id);

              if (updateError) {
                console.error('Profile update error:', updateError);
                throw updateError;
              }
              console.log('Profile updated successfully');
            } else {
              console.error('Could not extract Discord ID from user metadata');
              throw new Error('Discord ID not found in user metadata');
            }
          }

          toast({
            title: "Successfully authenticated",
            description: "Welcome back!"
          });
          navigate('/');
        }
      } catch (error) {
        console.error('Full error details:', error);
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