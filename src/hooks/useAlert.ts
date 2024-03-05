import { useCallback } from "react";

/**
 * Alert 커스텀 훅
 */
export const useAlert = () => {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []);

  const showConfirm = useCallback((message: string, onConfirm: () => void) => {
    if (window.confirm(message)) {
      onConfirm();
    }
  }, []);

  return { showAlert, showConfirm };
};
