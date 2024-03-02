import { FetchBooksParams, FetchBooksResponse } from "@/types/type";
import { httpClient } from "./http";

/**
 * 책 목록을 조회하는 API
 * @param FetchBooksParams
 */
export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const response = await httpClient().get<FetchBooksResponse>("/books", {
      params: params,
    });
    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};
