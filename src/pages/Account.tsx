import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LoadingSpinner from '@/components/LoadingSpinner';
import ReturnHomeButton from '@/components/ReturnHomeButton';

const Account = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { data: orders, isLoading: ordersLoading } = useQuery({
    queryKey: ['orders', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { data: subscriptions, isLoading: subscriptionsLoading } = useQuery({
    queryKey: ['subscriptions', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  if (!user) return null;
  if (profileLoading || ordersLoading || subscriptionsLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <ReturnHomeButton />
      
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile?.avatar_url} />
            <AvatarFallback>{profile?.username?.[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">{profile?.username || 'User'}</h1>
            <p className="text-gray-400">Member since {new Date(profile?.created_at).toLocaleDateString()}</p>
          </div>
        </div>

        <Tabs defaultValue="purchases" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="purchases">
            <Card>
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
                <CardDescription>View all your past purchases</CardDescription>
              </CardHeader>
              <CardContent>
                {orders?.length === 0 ? (
                  <p className="text-gray-400">No purchases yet</p>
                ) : (
                  <div className="space-y-4">
                    {orders?.map((order) => (
                      <div key={order.id} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                        <div>
                          <p className="font-medium">Order #{order.id.slice(0, 8)}</p>
                          <p className="text-sm text-gray-400">{new Date(order.created_at).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${order.amount}</p>
                          <p className="text-sm text-gray-400">{order.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscriptions">
            <Card>
              <CardHeader>
                <CardTitle>Active Subscriptions</CardTitle>
                <CardDescription>Manage your current subscriptions</CardDescription>
              </CardHeader>
              <CardContent>
                {subscriptions?.length === 0 ? (
                  <p className="text-gray-400">No active subscriptions</p>
                ) : (
                  <div className="space-y-4">
                    {subscriptions?.map((sub) => (
                      <div key={sub.id} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                        <div>
                          <p className="font-medium">Subscription #{sub.id.slice(0, 8)}</p>
                          <p className="text-sm text-gray-400">
                            Expires: {sub.current_period_end ? new Date(sub.current_period_end).toLocaleDateString() : 'N/A'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">{sub.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Username</label>
                  <p className="text-gray-400">{profile?.username || 'Not set'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Discord ID</label>
                  <p className="text-gray-400">{profile?.discord_id || 'Not connected'}</p>
                </div>
                <div className="pt-4">
                  <Button onClick={() => navigate('/')} variant="outline">
                    Back to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;