import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/components/auth/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import AuthCallback from '@/pages/AuthCallback';
import ProductDetails from '@/pages/ProductDetails';
import Payment from '@/pages/Payment';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Vouches from '@/pages/Vouches';
import Account from '@/pages/Account';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/vouches" element={<Vouches />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Toaster />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;