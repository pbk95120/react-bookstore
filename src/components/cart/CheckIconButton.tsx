import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

const CheckIconButton = ({ isChecked, onCheck }: Props) => {
  return (
    <button onClick={onCheck} className="border-0 cursor-pointer bg-none">
      {isChecked ? (
        <FaRegCircleCheck className="w-6 h-6" />
      ) : (
        <FaRegCircle className="w-6 h-6" />
      )}
    </button>
  );
};

export default CheckIconButton;
