'use client';
import { Skeleton } from "@/components/ui/skeleton"
import SkeletonCard from "./SkeletonCard";
interface SkeletonListProps {

}

const SkeletonList: React.FC<SkeletonListProps> = ({}) => {
    return (
        <div className="flex flex-col w-full h-full space-y-4 ">
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
        </div>
      )
    }

export default SkeletonList;