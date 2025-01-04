import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type ToastFunction = typeof toast;

export const handleSignInWithDiscord = async (showToast: ToastFunction) => {
  try {
    console.log('Starting Discord sign in...');
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${window.location.origin}/auth/discord/callback`,
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
      title: "Error signing in with Discord",
      variant: "destructive"
    });
  }
};

export const handleSignOut = async (showToast: ToastFunction) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Error signing out:', error);
    showToast({
      title: "Error signing out",
      variant: "destructive"
    });
  }
};