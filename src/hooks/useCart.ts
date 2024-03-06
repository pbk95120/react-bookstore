import { useEffect, useState } from "react";
import { Cart } from "@/types/type";
import { fetchCart, deleteCart } from "@/api/carts.api";

export const useCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteCartItem = (id: number) => {
    deleteCart(id).then(() => {
      setCarts(carts.filter((cart) => cart.id !== id));
    });
  };

  useEffect(() => {
    fetchCart().then((carts) => {
      setCarts(carts);
      setIsEmpty(carts.length === 0);
    });
  }, []);

  return { carts, isEmpty, deleteCartItem };
};
