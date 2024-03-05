import { Cart } from "@/types/type";
import Button from "../common/Button";
import Title from "../common/Title";
import CheckIconButton from "./CheckIconButton";
import { useMemo } from "react";
import { useAlert } from "../../hooks/useAlert";

interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

const CartItem = ({ cart, checkedItems, onCheck, onDelete }: Props) => {
  const { showConfirm } = useAlert();

  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const handleCheck = () => {
    onCheck(cart.id);
  };

  const handleDelete = () => {
    showConfirm("장바구니에서 삭제하시겠습니까?", () => {
      onDelete(cart.id);
    });
  };

  return (
    <div className="flex justify-between items-start border border-solid p-3">
      <div className="flex items-start flex-1">
        <div className="w-10 shrink-0">
          <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
        </div>
        <div>
          <Title size="medium">{cart.title}</Title>
          <p className="pb-2 m-0">{cart.summary}</p>
          <p className="pb-2 m-0">{cart.price}</p>
          <p className="pb-2 m-0">{cart.quantity}</p>
        </div>
      </div>
      <Button size="medium" color="black" onClick={handleDelete}>
        장바구니삭제
      </Button>
    </div>
  );
};

export default CartItem;
