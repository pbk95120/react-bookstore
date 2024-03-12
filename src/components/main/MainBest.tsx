import { Book } from "@/types/type";
import BookBestItem from "@/components/books/BookBestItem";

interface Props {
  books: Book[];
}

function MainBest({ books }: Props) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {books.map((item, index) => (
        <BookBestItem key={item.id} book={item} itemIndex={index} />
      ))}
    </div>
  );
}

export default MainBest;
