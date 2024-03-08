import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Book, ViewMode } from "@/types/type";
import { QUERYSTRING } from "@/constants/constant";
import BookItem from "@/components/books/BookItem";

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  const [view, setView] = useState<ViewMode>("grid");
  const loacation = useLocation();

  useEffect(() => {
    const parmas = new URLSearchParams(loacation.search);
    if (parmas.get(QUERYSTRING.VIEW)) {
      setView(parmas.get(QUERYSTRING.VIEW) as ViewMode);
    }
  }, [loacation.search]);

  return (
    <div
      className={
        view === "grid" ? "grid grid-cols-4 gap-6" : "grid grid-col-1fr-2 gap-6"
      }
    >
      {books?.map((item) => (
        <BookItem key={item.id} book={item} view={view} />
      ))}
    </div>
  );
};

export default BooksList;
