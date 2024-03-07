import useToastStore from "@/store/toastStore";
import Toast from "@/components/common/toast/Toast";

const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);
  return (
    <div className="fixed top-8 right-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
