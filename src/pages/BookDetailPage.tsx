import { getImgSrc } from "../utils/image";
import { useBook } from "../hooks/useBook";
import { Link, useParams } from "react-router-dom";
import Title from "../components/common/Title";
import { BookDetail as IBookDetail } from "@/types/type";
import { formatDate, formatNumber } from "../utils/format";
import EllipsisBox from "../components/common/EllipsisBox";
import LikeButton from "../components/book/LikeButton";
import AddToCart from "../components/book/AddToCart";

const bookInfoList = [
  {
    label: "카테고리",
    key: "categoryName",
    filter: (book: IBookDetail) => {
      return (
        <div>
          <Link
            to={`/books?category_id=${book.category_id}`}
            className="text-orange underline"
          >
            {book.categoryName}
          </Link>
        </div>
      );
    },
  },
  { label: "포맷", key: "form" },
  { label: "페이지", key: "pages" },
  { label: "ISBN", key: "isbn" },
  {
    label: "출간일",
    key: "pub_date",
    filter: (book: IBookDetail) => {
      return formatDate(book.pubDate);
    },
  },
  {
    label: "가격",
    key: "price",
    filter: (book: IBookDetail) => {
      return `${formatNumber(book.price)} 원`;
    },
  },
];

const BookDetailPage = () => {
  const { bookId } = useParams();
  const { book, likeToggle } = useBook(bookId);

  if (!book) {
    return null;
  }

  return (
    <div>
      <header className="flex items-start gap-6 pb-6">
        <div className="flex-1">
          <img
            src={getImgSrc(book.img)}
            alt={book.title}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Title size="large">{book.title}</Title>
          {bookInfoList.map((item) => (
            <dl className="flex m-0">
              <dt className="w-20 text-lightgray">{item.label}</dt>
              <dt className="w-30">
                {item.filter
                  ? item.filter(book)
                  : book[item.key as keyof IBookDetail]}
              </dt>
            </dl>
          ))}
          <p>{book.summary}</p>
          <div>
            <LikeButton
              book={book}
              onClick={() => {
                likeToggle();
              }}
            />
          </div>
          <div>
            <AddToCart book={book} />
          </div>
        </div>
      </header>
      <div>
        <Title size="medium">책 소개</Title>
        <EllipsisBox linelimit={4}>{book.title}</EllipsisBox>
        <Title size="large">목차</Title>
        <p>{book.contents}</p>
      </div>
    </div>
  );
};
export default BookDetailPage;
