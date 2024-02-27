import { httpClient } from "./http";
import { SignupProps, LoginResponse } from "@/types/type";

/**
 * 회원가입 Post API
 * @param userDate
 */
export const signup = async (userDate: SignupProps) => {
  const response = await httpClient().post("/users/join", userDate);
  return response.data;
};

/**
 * 비밀번호 초기화 요청 Post API
 * @param userDate
 */
export const resetRequsest = async (data: SignupProps) => {
  const response = await httpClient().post("/users/reset", data);
  return response.data;
};

/**
 * 비밀번호 변경 Put API
 * @param userDate
 */
export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient().put("/users/reset", data);
  return response.data;
};

/**
 * 로그인 Post API
 * @param userDate
 */
export const login = async (data: SignupProps) => {
  const response = await httpClient().post<LoginResponse>("/users/login", data);
  return response.data;
};
