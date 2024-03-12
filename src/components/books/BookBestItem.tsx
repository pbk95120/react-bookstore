import { Book } from "@/types/type";
import BookItem from "@/components/books/BookItem";

interface Props {
  book: Book;
  itemIndex: number;
}

function BookBestItem({ book, itemIndex }: Props) {
  return (
    <div className="relative">
      <BookItem book={book} view="grid" isBest={true} />
      <div className="-top-2.5 -left-2.5 absolute rounded-full flex w-10 h-10 text-xl text-white bg-orange font-bold items-center italic justify-center">
        {itemIndex + 1}
      </div>
    </div>
  );
}

export default BookBestItem;
