import BookItem from "./BookItem";
import { Book } from "@/types/type";

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  return (
    <div>
      {books?.map((item) => (
        <BookItem key={item.id} book={item} />
      ))}
    </div>
  );
};

export default BooksList;
