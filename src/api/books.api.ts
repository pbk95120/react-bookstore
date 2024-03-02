import { FetchBooksParams, FetchBooksResponse } from "@/types/type";
import { httpClient } from "./http";

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
