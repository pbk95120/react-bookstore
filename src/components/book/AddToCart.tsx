import { useState } from "react";
import { Link } from "react-router-dom";
import { useBook } from "@/hooks/useBook";
import { BookDetail } from "@/types/type";
import Button from "@/components/common/Button";
import InputText from "@/components/common/InputText";

interface Props {
  book: BookDetail;
}

const AddToCart = ({ book }: Props) => {
  const [qunatity, setQuantity] = useState<number>(1);
  const { AddToCart, cartAdded } = useBook(book.id.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleIncrease = () => {
    setQuantity(qunatity + 1);
  };

  const handleDecrease = () => {
    setQuantity(qunatity - 1);
  };

  return (
    <div className="flex justify-between items-center relative">
      <div>
        <InputText type="number" value={qunatity} onChange={handleChange} />
        <Button size="medium" color="black" onClick={handleIncrease}>
          +
        </Button>
        <Button size="medium" color="black" onClick={handleDecrease}>
          -
        </Button>
      </div>

      <Button size="medium" color="white" onClick={() => AddToCart(qunatity)}>
        장바구니담기
      </Button>
      <div
        className={
          cartAdded
            ? "absolute right-0 py-2 px-3 bg-lightgray rounded top-16 opacity-100 transition-all"
            : "absolute right-0 py-2 px-3 bg-lightgray rounded top-16 opacity-0"
        }
      >
        <p className="pb-2 m-0">장바구니에 추가 되었습니다.</p>
        <Link to="/cart" className="underline">
          장바구니로 이동
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
