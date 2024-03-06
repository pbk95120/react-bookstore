import { requestHandler } from "@/api/http";
import { Order, OrderSheet, OrderDetailItem } from "@/types/type";

/**
 * 주문 제출 Post API
 * @returns 카테고리 목록
 */
export const createOrder = async (orderData: OrderSheet) => {
  return await requestHandler<OrderSheet>("post", "/orders", orderData);
};

/**
 * 주문 목록 조회 Get API
 * @returns 주문 목록
 */
export const fetchOrders = async () => {
  return await requestHandler<Order[]>("get", "/orders");
};

/**
 * 상세 주문 목록 조회 Get API
 * @returns 주문 목록
 */
export const fetchOrder = async (orderId: number) => {
  return await requestHandler<OrderDetailItem>("get", `/orders/${orderId}`);
};
