import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

const AuthForm = () => {
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        toast({
          title: "Successfully signed in",
          variant: "default"
        });
      } else if (event === 'SIGNED_OUT') {
        toast({
          title: "Signed out",
          variant: "default"
        });
      } else if (event === 'USER_UPDATED') {
        toast({
          title: "Profile updated",
          variant: "default"
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-[#0A0A0A]/80 border border-[#222] rounded-lg">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#1EAEDB',
                brandAccent: '#0FA0CE',
                messageText: 'white',
                messageTextDanger: '#ff4b4b',
              },
              borderWidths: {
                buttonBorderWidth: '1px',
                inputBorderWidth: '1px',
              },
              radii: {
                borderRadiusButton: '0.5rem',
                buttonBorderRadius: '0.5rem',
                inputBorderRadius: '0.5rem',
              },
            },
          },
          className: {
            container: 'auth-container',
            button: 'auth-button',
            message: 'auth-message',
          },
        }}
        providers={['discord']}
        redirectTo={`${window.location.origin}/auth/callback`}
      />
    </div>
  );
};

export default AuthForm;