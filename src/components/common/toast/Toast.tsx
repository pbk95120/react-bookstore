import { ToastItem } from "@/types/type";
import { FaPlus, FaBan, FaInfoCircle } from "react-icons/fa";

const Toast = ({ id, message, type }: ToastItem) => {
  const handleRemoveToast = () => {};

  return (
    <div className="bg-orange p-3 flex justify-between items-start gap-6">
      <p className="leading-none flex items-end gap-1 flex-1">
        {type === "info" && <FaInfoCircle />}
        {type === "error" && <FaBan />}
        {message}
      </p>
      <button onClick={handleRemoveToast}>
        <FaPlus className="rotate-45" />
      </button>
    </div>
  );
};

export default Toast;
