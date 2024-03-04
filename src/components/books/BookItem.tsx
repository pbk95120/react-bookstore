import { Book } from "@/types/type";
import { getImgSrc } from "../../utils/image";
import { formatNumber } from "../../utils/format";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  book: Book;
  view?: "list" | "grid";
}

const BookItem = ({ book, view }: Props) => {
  return (
    <div
      className={
        view === "grid" ? "flex flex-col shadow-md" : "flex flex-row shadow-md"
      }
    >
      <Link to={`/book/${book.id}`}>
        <div
          className={
            view === "grid"
              ? "rounded overflow-hidden w-auto"
              : "rounded overflow-hidden w-40"
          }
        >
          <img
            src={getImgSrc(book.img)}
            alt={book.title}
            className="max-w-full"
          />
        </div>
        <div
          className={
            view === "grid" ? "p-4 relative flex-none" : "p-4 relative flex-1"
          }
        >
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
      </Link>
    </div>
  );
};

export default BookItem;
