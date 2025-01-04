import { supabase } from '@/integrations/supabase/client';
import { Toast } from '@/components/ui/use-toast';

export const handleSignInWithDiscord = async (showToast: (props: Toast) => void) => {
  try {
    console.log('Starting Discord sign in...');
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: 'https://discord.com/oauth2/authorize?client_id=1325030111124393985&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fdiscord%2Fcallback&scope=identify+email',
        scopes: 'identify email',
      }
    });
    
    if (error) {
      console.error('Discord sign in error:', error);
      throw error;
    }
    console.log('Discord sign in initiated successfully');
  } catch (error) {
    console.error('Error signing in with Discord:', error);
    showToast({
      title: "Error",
      description: "Failed to sign in with Discord. Please try again.",
      variant: "destructive"
    });
  }
};

export const handleSignOut = async (showToast: (props: Toast) => void) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Error signing out:', error);
    showToast({
      title: "Error",
      description: "Failed to sign out. Please try again.",
      variant: "destructive"
    });
  }
};