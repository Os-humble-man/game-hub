import { Skeleton } from "@/components/ui/skeleton";

function GameCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <Skeleton className="aspect-video w-full rounded-t-lg" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-6 w-3/4 md:w-2/3 lg:w-1/2 rounded-md" />
        <div className="flex justify-between items-center py-2">
          <Skeleton className="h-4 w-1/3 rounded-md" />
          <Skeleton className="h-4 w-1/6 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default GameCardSkeleton;
