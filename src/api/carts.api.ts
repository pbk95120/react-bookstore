import { httpClient } from "./http";
import { AddCartParams, Cart } from "@/types/type";

/**
 * 장바구니 추가 Post API
 * @param userDate
 */
export const addCart = async (params: AddCartParams) => {
  const response = await httpClient().post("/carts", params);
  return response.data;
};

/**
 * 장바구니 조회  Get API
 * @param userDate
 */
export const fetchCart = async () => {
  const response = await httpClient().get<Cart[]>("/carts");
  return response.data;
};

/**
 * 장바구니 삭제 Delete API
 * @param userDate
 */
export const deleteCart = async (cartId: number) => {
  const response = await httpClient().delete(`/carts/${cartId}`);
  return response.data;
};
