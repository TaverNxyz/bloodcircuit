import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';

const AuthForm = () => {
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
              },
            },
          },
        }}
        providers={['discord']}
        redirectTo={`${window.location.origin}/`}
      />
    </div>
  );
};

export default AuthForm;