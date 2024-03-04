import { useLocation } from "react-router-dom";
import BookItem from "./BookItem";
import { Book, ViewMode } from "@/types/type";
import { useState, useEffect } from "react";
import { QUERYSTRING } from "../../constants/querystring";

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
