import { Order, OrderSheet, OrderDetailItem } from "@/types/type";
import { httpClient } from "./http";

/**
 * 주문 제출 Post API
 * @returns 카테고리 목록
 */
export const createOrder = async (orderData: OrderSheet) => {
  const response = await httpClient().post("/orders", orderData);
  return response.data;
};

/**
 * 주문 목록 조회 Get API
 * @returns 주문 목록
 */
export const fetchOrders = async () => {
  const response = await httpClient().get<Order[]>("/orders");
  return response.data;
};

/**
 * 상세 주문 목록 조회 Get API
 * @returns 주문 목록
 */
export const fetchOrder = async (orderId: number) => {
  const response = await httpClient().get<OrderDetailItem[]>(
    `/orders/${orderId}`
  );
  return response.data;
};
