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
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        if (session) {
          const { user } = session;
          console.log('User metadata:', user.user_metadata); // Debug log

          if (user?.app_metadata?.provider === 'discord') {
            const { error: updateError } = await supabase
              .from('profiles')
              .update({
                discord_id: user.user_metadata.custom_claims?.global_name || user.user_metadata.name,
                avatar_url: user.user_metadata.avatar_url,
                username: user.user_metadata.custom_claims?.global_name || user.user_metadata.name || user.user_metadata.email
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