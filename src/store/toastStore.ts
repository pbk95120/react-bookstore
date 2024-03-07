import create from "zustand";
import { ToastStore } from "@/types/type";

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (message, type = "info") => {
    set((state) => ({
      toasts: [...state.toasts, { message, type, id: Date.now() }],
    }));
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));

export default useToastStore;
