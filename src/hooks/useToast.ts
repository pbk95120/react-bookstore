import useToastStore from "@/store/toastStore";

export const useToast = () => {
  const showToast = useToastStore((state) => state.addToast);
  return { showToast };
};
