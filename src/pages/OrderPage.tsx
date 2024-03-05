import { useLocation, useNavigate } from "react-router-dom";
import Title from "../components/common/Title";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import { useForm } from "react-hook-form";
import { Delivery, OrderSheet } from "@/types/type";
import FindAddressButton from "../components/order/FindAddressButton";
import { useAlert } from "../hooks/useAlert";
import { createOrder } from "../api/order.api";

interface deliveryForm extends Delivery {
  addressDetail: string;
}

const OrderPage = () => {
  const { showAlert, showConfirm } = useAlert();
  const navigate = useNavigate();
  const location = useLocation();
  const orderDataFromCart = location.state;
  const { totalQuantity, totalPrice, firstBookTitle } = orderDataFromCart;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<deliveryForm>();

  const handlePay = (data: deliveryForm) => {
    const orderData: OrderSheet = {
      ...orderDataFromCart,
      delivery: {
        ...data,
        address: `${data.address} ${data.addressDetail}`,
      },
    };

    showConfirm("주문을 진행하겠습니까?", () => {
      console.log(orderData);
      createOrder(orderData).then(() => {
        showAlert("주문이 완료되었습니다.");
        navigate("/orderlist");
      });
    });
  };

  return (
    <div>
      <Title size="large" color="orange">
        주문서 작성
      </Title>
      <div className="flex gap-6 justify-between pt-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="border border-solid rounded p-3">
            <Title size="medium">배송 정보</Title>
            <form>
              <fieldset className="flex justify-start items-center gap-2 border-none m-0 pb-3">
                <label className="w-20">주소</label>
                <div className="flex-1">
                  <InputText
                    type="text"
                    placeholder="주소를 입력해주세요."
                    className="w-full"
                    {...register("address", { required: true })}
                  />
                </div>
                <FindAddressButton
                  onCompleted={(address) => setValue("address", address)}
                />
              </fieldset>
              {errors.address && (
                <p className="text-red-500 pb-3 text-right">
                  주소를 입력해 주세요
                </p>
              )}

              <fieldset className="flex justify-start items-center gap-2 border-none m-0 pb-3">
                <label className="w-20">상세 주소</label>
                <div className="flex-1">
                  <InputText
                    type="text"
                    placeholder="상세 주소를 입력해주세요."
                    className="w-full"
                    {...register("addressDetail", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.address && (
                <p className="text-red-500 pb-3 text-right">
                  상세 주소를 입력해 주세요
                </p>
              )}

              <fieldset className="flex justify-start items-center gap-2 border-none m-0 pb-3">
                <label className="w-20">수령인</label>
                <div className="flex-1">
                  <InputText
                    type="text"
                    placeholder="수령자 성함을 입력해주세요."
                    className="w-full"
                    {...register("receiver", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.address && (
                <p className="text-red-500 pb-3 text-right">
                  수령인을 입력해 주세요
                </p>
              )}

              <fieldset className="flex justify-start items-center gap-2 border-none m-0 pb-3">
                <label className="w-20">전화번호</label>
                <div className="flex-1">
                  <InputText
                    type="text"
                    placeholder="전화번호를 입력해주세요."
                    className="w-full"
                    {...register("contact", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.address && (
                <p className="text-red-500 pb-3 text-right">
                  전화번호를 입력해 주세요
                </p>
              )}
            </form>
          </div>
          <div className="border border-solid rounded p-3">
            <Title size="medium">주문 상품</Title>
            <strong>
              {firstBookTitle} 등 총 {totalQuantity} 권
            </strong>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
          <Button size="large" color="white" onClick={handleSubmit(handlePay)}>
            결제하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
