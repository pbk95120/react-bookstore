import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { LoginProps, SignupProps } from "@/types/type";
import { login, signup, resetPassword, resetRequsest } from "@/api/auth.api";

export const useAuth = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const { storeLogin } = useAuthStore();

  const userLogin = (data: LoginProps) => {
    login(data)
      .then((res) => {
        storeLogin(res.token);
        showAlert("로그인이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        if (error) {
          showAlert("로그인에 실패했습니다.");
        }
      });
  };

  const userSignup = (data: SignupProps) => {
    signup(data).then(() => {
      showAlert("회원가입이 완료되었습니다.");
      navigate("/login");
    });
  };

  const userResetPassword = (data: SignupProps) => {
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화되었습니다.");
      navigate("/login");
    });
  };

  const [resetRequested, setResetRequested] = useState(false);

  const userResetRequested = (data: SignupProps) => {
    resetRequsest(data).then(() => {
      showAlert("초기화 요청이 완료되었습니다.");
      setResetRequested(true);
    });
  };

  return {
    userLogin,
    userSignup,
    userResetPassword,
    resetRequested,
    userResetRequested,
  };
};
