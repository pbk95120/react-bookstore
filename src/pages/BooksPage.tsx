import { useBooks } from "@/hooks/useBooks";
import Title from "@/components/common/Title";
import BooksFilter from "@/components/books/BooksFilter";
import BooksViewSwitcher from "@/components/books/BooksViewSwitcher";
import BooksList from "@/components/books/BooksList";
import BooksEmpty from "@/components/books/BooksEmpty";
import Pagination from "@/components/books/Pagination";
import Loading from "@/components/common/Loading";

const BooksPage = () => {
  const { books, pagination, isEmpty, isBooksLoading } = useBooks();

  if (isEmpty) {
    return <BooksEmpty />;
  }

  if (!books || !pagination || isBooksLoading) {
    return <Loading />;
  }

  return (
    <>
      <Title size="large">도서 목록</Title>
      <div className="flex flex-col justify-between gap-6">
        <div className="flex justify-between items-center gap-5">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        <BooksList books={books} />
        <Pagination pagination={pagination} />
      </div>
    </>
  );
};

export default BooksPage;
