import { Book } from "@/types/type";
import BookItem from "@/components/books/BookItem";

interface Props {
  books: Book[];
}

const MainNewBooks = ({ books }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {books.map((book) => (
        <BookItem key={book.id} book={book} view="grid" />
      ))}
    </div>
  );
};

export default MainNewBooks;
