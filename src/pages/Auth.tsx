import AuthForm from "@/components/auth/AuthForm";
import ReturnHomeButton from "@/components/ReturnHomeButton";
import { useAuth } from "@/components/auth/AuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-black text-white">
      <ReturnHomeButton />
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;