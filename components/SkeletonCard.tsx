import { Skeleton } from "./ui/skeleton";


interface SkeletonCardProps {

}

const SkeletonCard: React.FC<SkeletonCardProps> = ({}) => {
  return (
    <div className="relative flex flex-col gap-1 border  w-full rounded-xl p-8 bg-white  dark:bg-[#2c2c2c]">
      
        <Skeleton className="h-4 w-2/3 bg-[#282828]" />
        <Skeleton className="h-4 w-1/2 bg-[#282828]" />
        <Skeleton className="h-4 w-[200px] bg-[#282828]" />

        <div className="flex w-full space-x-3 pt-4">
        <Skeleton className="h-4 w-4 rounded-full bg-[#282828]" />
        <Skeleton className="h-4 w-1/5 bg-[#282828]" />
        </div>
    </div>
  );
};

export default SkeletonCard;