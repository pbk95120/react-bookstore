import React from "react";
import { formatDate, formatNumber } from "@/utils/format";
import { useOrders } from "@/hooks/useOrder";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";

const OrderListPage = () => {
  const { orders, selectedItemId, selectOrderItem } = useOrders();

  return (
    <div>
      <Title size="large">주문 내역</Title>
      <div className="pt-6">
        <table className="w-full border-collapse border-y border-solid">
          <thead>
            <tr>
              <th className="p-4 border-b text-center">id</th>
              <th className="p-4 border-b text-center">주문일자</th>
              <th className="p-4 border-b text-center">주소</th>
              <th className="p-4 border-b text-center">수령인</th>
              <th className="p-4 border-b text-center">전화번호</th>
              <th className="p-4 border-b text-center">대표상품명</th>
              <th className="p-4 border-b text-center">수량</th>
              <th className="p-4 border-b text-center">금액</th>
              <th className="p-4 border-b text-center"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr>
                  <td className="p-4 border-b text-center">{order.id}</td>
                  <td className="p-4 border-b text-center">
                    {formatDate(order.createdAt, "YYYY.MM.DD")}
                  </td>
                  <td className="p-4 border-b text-center">{order.address}</td>
                  <td className="p-4 border-b text-center">{order.receiver}</td>
                  <td className="p-4 border-b text-center">{order.contact}</td>
                  <td className="p-4 border-b text-center">
                    {order.bookTitle}
                  </td>
                  <td className="p-4 border-b text-center">
                    {order.totalQuantity} 권
                  </td>
                  <td className="p-4 border-b text-center">
                    {formatNumber(order.totalPrice)} 원
                  </td>
                  <td>
                    <Button
                      size="small"
                      color="black"
                      onClick={() => selectOrderItem(order.id)}
                    >
                      자세히
                    </Button>
                  </td>
                </tr>
                {selectedItemId === order.id && (
                  <tr>
                    <td></td>
                    <td colSpan={8}>
                      <ul className="m-0">
                        {order?.detail &&
                          order.detail.map((item) => (
                            <li
                              key={item.bookId}
                              className="text-left list-square"
                            >
                              <div className="flex items-center py-2 px-3 gap-2">
                                <span>{item.bookId}</span>
                                <span>{item.author}</span>
                                <span>{formatNumber(item.price)} 원</span>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrderListPage;
