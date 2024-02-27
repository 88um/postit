import { FaUser } from "react-icons/fa";


interface DeafultPfpProps {
size : number
}

const DeafultPfp: React.FC<DeafultPfpProps> = ({size = 8}) => {
  return (
    <div className={`h-${size} w-${size} p-2 flex rounded-full bg-[#2c2c2c] relative shrink-0 overflow-hidden `}>
        <FaUser className="aspect-square h-full w-full text-white"/>
    </div>
  );
};

export default DeafultPfp;