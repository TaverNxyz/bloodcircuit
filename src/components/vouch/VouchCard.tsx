import { User, MessageSquare, Check, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { VouchWithProfile } from "@/integrations/supabase/types";

interface VouchCardProps {
  vouch: VouchWithProfile;
}

export const VouchCard = ({ vouch }: VouchCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  };

  // Safely get profile information with fallbacks
  const username = vouch.profiles?.username || "Anonymous User";
  const avatarUrl = vouch.profiles?.avatar_url || null;

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={avatarUrl || undefined} alt={username} />
              <AvatarFallback>
                <User className="h-6 w-6 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg text-white">
                {username}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {new Date(vouch.created_at).toLocaleDateString()}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {renderStars(vouch.rating || 0)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-start space-x-2">
          <MessageSquare className="h-5 w-5 mt-1 text-gray-400" />
          <p className="text-lg text-white">{vouch.content}</p>
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-400">
          <Check className="h-4 w-4 mr-1" />
          Verified Purchase
        </div>
      </CardContent>
    </Card>
  );
};