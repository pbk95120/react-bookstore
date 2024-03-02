import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import Pagination from "../components/books/Pagination";
import { useBooks } from "../hooks/useBooks";

const BooksPage = () => {
  const { books, pagination } = useBooks();
  return (
    <>
      <Title size="large">도서 목록</Title>
      <BooksFilter />
      <BooksViewSwitcher />
      <BooksList books={books} />
      <BooksEmpty />
      <Pagination />
    </>
  );
};

export default BooksPage;
