import { fetchOrders, fetchOrder } from "../api/order.api";
import { useState, useEffect } from "react";
import { OrderListItem } from "@/types/type";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    if (orders.filter((item) => item.id === orderId)[0].detail) {
      return setSelectedItemId(orderId);
    }

    fetchOrder(orderId).then((orderDetail) => {
      setSelectedItemId(orderId);

      setOrders(
        orders.map((item) => {
          if (item.id === orderId) {
            return {
              ...item,
              detail: orderDetail,
            };
          }
          return item;
        })
      );
    });
  };

  return { orders, selectedItemId, selectOrderItem };
};
