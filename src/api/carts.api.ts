import { requestHandler } from "@/api/http";
import { AddCartParams, Cart } from "@/types/type";

/**
 * 장바구니 추가 Post API
 * @param userDate
 */
export const addCart = async (params: AddCartParams) => {
  return await requestHandler("post", "/carts", params);
};

/**
 * 장바구니 조회  Get API
 * @param userDate
 */
export const fetchCart = async () => {
  return await requestHandler<Cart[]>("get", "/carts");
};

/**
 * 장바구니 삭제 Delete API
 * @param userDate
 */
export const deleteCart = async (cartId: number) => {
  return await requestHandler("delete", `/carts/${cartId}`);
};
