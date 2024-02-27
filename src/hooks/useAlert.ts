import { useCallback } from "react";

/**
 * Alert 커스텀 훅
 */
export const useAlert = () => {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []);

  return showAlert;
};
