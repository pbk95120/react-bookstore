import { Book } from "@/types/type";
import { getImgSrc } from "../../utils/image";
import { formatNumber } from "../../utils/format";
import { FaHeart } from "react-icons/fa";

interface Props {
  book: Book;
}

const BookItem = ({ book }: Props) => {
  return (
    <div className="flex-col shadow-md">
      <div>
        <img
          src={getImgSrc(book.img)}
          alt={book.title}
          className="rounded overflow-hidden max-w-full"
        />
      </div>
      <div className="p-4 relative">
        <h2 className="text-xl font-bold mb-3">{book.title}</h2>
        <p className="text-sm	mb-1 text-lightgray">{book.summary}</p>
        <p className="text-sm	mb-1 text-lightgray">{book.author}</p>
        <p className="text-sm	font-bold mb-1 text-grey">
          {formatNumber(book.price)}원
        </p>
        <div className="inline-flex items-center gap-1 text-sm mb-1 font-bold border-solid border rounded py-1 px-3 absolute bottom-4 right-4">
          <FaHeart />
          <span>{book.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
