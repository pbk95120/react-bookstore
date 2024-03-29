import { useEffect } from "react";
import { FaPlus, FaBan, FaInfoCircle } from "react-icons/fa";
import { TOAST_REMOVE_DELAY } from "@/constants/constant";
import { ToastItem } from "@/types/type";
import useToastStore from "@/store/toastStore";

const Toast = ({ id, message, type }: ToastItem) => {
  const removeToast = useToastStore((state) => state.removeToast);
  const handleRemoveToast = () => {};

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, TOAST_REMOVE_DELAY);
    return () => clearTimeout(timer);
  }, []);

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
