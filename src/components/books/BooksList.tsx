import BookItem from "./BookItem";
import { Book } from "@/types/type";

const dummyBook: Book = {
  id: 1,
  title: "This is a title",
  img: 5,
  category_id: 1,
  summary: "This is a summary",
  author: "John Doe",
  price: 10000,
  likes: 1,
  form: "hardcover",
  isbn: "1234567890",
  detail: "This is a detail",
  pages: 100,
  contents: "This is a content",
  pubDate: "2021-01-01",
};

const BooksList = () => {
  return (
    <>
      <BookItem book={dummyBook} />
    </>
  );
};

export default BooksList;
