import { requestHandler } from "@/api/http";
import { SignupProps } from "@/types/type";

/**
 * 회원가입 Post API
 * @param userDate
 */
export const signup = async (userDate: SignupProps) => {
  return await requestHandler("post", "/users/join", userDate);
};

/**
 * 비밀번호 초기화 요청 Post API
 * @param userDate
 */
export const resetRequsest = async (data: SignupProps) => {
  return await requestHandler("post", "/users/reset", data);
};

/**
 * 비밀번호 변경 Put API
 * @param userDate
 */
export const resetPassword = async (data: SignupProps) => {
  return await requestHandler("put", "/users/reset", data);
};

/**
 * 로그인 Post API
 * @param userDate
 */
export const login = async (data: SignupProps) => {
  return await requestHandler("post", "/users/login", data);
};
