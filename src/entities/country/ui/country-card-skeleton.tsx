import { Card, CardContent } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

export const CountryCardSkeleton = () => {
  return (
    <Card>
      <CardContent className="flex items-center gap-2">
        <Skeleton className="w-8 h-8" />
        <Skeleton className="w-full h-8" />
      </CardContent>
    </Card>
  );
};
