import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const VouchSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
      <div className="space-y-4">
        <Skeleton className="h-10 w-48 bg-gray-800" />
        <Skeleton className="h-6 w-64 bg-gray-800" />
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="w-full bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full bg-gray-800" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32 bg-gray-800" />
                <Skeleton className="h-4 w-24 bg-gray-800" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-20 w-full bg-gray-800" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};