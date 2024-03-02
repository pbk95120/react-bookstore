import { FaSmileWink } from "react-icons/fa";
import Title from "../common/Title";
import { Link } from "react-router-dom";

const BooksEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-30">
      <div>
        <FaSmileWink className="text-6xl fill-lightgray" />
      </div>
      <Title size="large" color="lightgray">
        검색 결과가 없습니다
      </Title>
      <p>
        <Link to="/books">전체 검색 결과로 이동.</Link>
      </p>
    </div>
  );
};

export default BooksEmpty;
