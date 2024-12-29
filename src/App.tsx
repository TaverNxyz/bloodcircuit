import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/components/auth/AuthProvider';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import AuthCallback from '@/pages/AuthCallback';
import ProductDetails from '@/pages/ProductDetails';
import Payment from '@/pages/Payment';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';

const App = () => {
  return (
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
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
};

export default App;