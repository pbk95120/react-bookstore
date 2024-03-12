import { useLocation } from "react-router-dom";
import { fetchBooks } from "@/api/books.api";
import { LIMIT, QUERYSTRING } from "@/constants/constant";
import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  const loacation = useLocation();
  const params = new URLSearchParams(loacation.search);

  const { data: booksData, isLoading: isBooksLoading } = useQuery({
    queryKey: ["books", location.search],
    queryFn: () =>
      fetchBooks({
        category_id: params.get(QUERYSTRING.CATEGORY_ID)
          ? Number(params.get(QUERYSTRING.CATEGORY_ID))
          : undefined,
        news: params.get(QUERYSTRING.NEWS) ? true : undefined,
        currentPage: params.get(QUERYSTRING.PAGE)
          ? Number(params.get(QUERYSTRING.PAGE))
          : 1,
        limit: LIMIT,
      }),
  });

  return {
    books: booksData?.books,
    pagination: booksData?.pagination,
    isEmpty: booksData?.books.length === 0,
    isBooksLoading,
  };
};
