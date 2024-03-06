import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/hooks/useCart";
import { useAlert } from "@/hooks/useAlert";
import { OrderSheet } from "@/types/type";
import CartItem from "@/components/cart/CartItem";
import Title from "@/components/common/Title";
import Empty from "@/components/common/Empty";
import CartSummary from "@/components/cart/CartSummary";
import Button from "@/components/common/Button";

const CartPage = () => {
  const { showAlert, showConfirm } = useAlert();
  const navigate = useNavigate();
  const { carts, deleteCartItem, isEmpty } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleDeleteItem = (id: number) => {
    deleteCartItem(id);
  };

  const totalQuantity = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.quantity;
      }
      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const totalPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.price * cart.quantity;
      }
      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const handleOrder = () => {
    if (checkedItems.length === 0) {
      showAlert("주문할 상품을 선택해주세요.");
      return;
    }

    const orderData: Omit<OrderSheet, "delivery"> = {
      items: checkedItems,
      totalPrice,
      totalQuantity,
      firstBookTitle: carts[0].title,
    };
    showConfirm("주문하시겠습니까?", () => {
      navigate("/order", { state: orderData });
    });
  };

  return (
    <>
      <Title size="large" color="orange">
        장바구니
      </Title>
      <div className="flex gap-6 justify-between pt-6">
        {!isEmpty && (
          <>
            <div className="flex flex-1 flex-col gap-3">
              {carts.map((cart) => (
                <CartItem
                  key={cart.id}
                  cart={cart}
                  checkedItems={checkedItems}
                  onCheck={handleCheckItem}
                  onDelete={handleDeleteItem}
                />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <CartSummary
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
              />
              <Button size="large" color="white" onClick={handleOrder}>
                주문 하기
              </Button>
            </div>
          </>
        )}
        {isEmpty && (
          <Empty
            icon={<FaShoppingCart className="text-6xl fill-lightgray" />}
            title="장바구니가 비었습니다"
            description={
              <Link to="/books" className="underline">
                장바구니를 채워보세요.
              </Link>
            }
          />
        )}
      </div>
    </>
  );
};

export default CartPage;
