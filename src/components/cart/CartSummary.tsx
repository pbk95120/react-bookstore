import { formatNumber } from "../../utils/format";

interface Props {
  totalQuantity: number;
  totalPrice: number;
}

const CartSummary = ({ totalQuantity, totalPrice }: Props) => {
  return (
    <div className="border border-solid rounded p-3 w-60">
      <h1 className="text-2xl">주문요약</h1>
      <dl className="flex justify-between mb-3">
        <dt>총 수량</dt>
        <dd className="font-bold">{totalQuantity} 권</dd>
      </dl>
      <dl className="flex justify-between mb-3">
        <dt>총 금액</dt>
        <dd className="font-bold">{formatNumber(totalPrice)} 원</dd>
      </dl>
    </div>
  );
};

export default CartSummary;
