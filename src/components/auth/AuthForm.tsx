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
          description: "Welcome back!",
          variant: "default"
        });
      } else if (event === 'SIGNED_OUT') {
        toast({
          title: "Signed out",
          description: "Come back soon!",
          variant: "default"
        });
      } else if (event === 'USER_UPDATED') {
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully",
          variant: "default"
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-card/80 backdrop-blur-sm border border-border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#F97316] via-[#9b87f5] to-[#F97316] bg-clip-text text-transparent">
        Welcome Back
      </h2>
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
        magicLink={true}
      />
    </div>
  );
};

export default AuthForm;