import { useRouteError } from "react-router-dom";
import { RouteError } from "@/types/type";

/**
 * 공용 에러 컴포넌트
 */
const Error = () => {
  const error = useRouteError() as RouteError;
  return (
    <div>
      <h1>오류가 발생했습니다.</h1>
      <p>다음과 같은 오류가 발생했습니다.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
