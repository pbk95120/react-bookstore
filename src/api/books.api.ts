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

/**
 * 책 상세정보를 조회하는 API
 * @param FetchBooksParams
 */
export const fetchBook = async (bookId: string) => {
  const response = await httpClient().get(`/books/${bookId}`);
  return response.data;
};

/**
 * 책 좋아요 버튼을 누르는 API
 * @param FetchBooksParams
 */
export const likeBook = async (bookId: number) => {
  const response = await httpClient().post(`/likes/${bookId}`);
  return response.data;
};

/**
 * 책 좋아요 버튼을 취소하는 API
 * @param FetchBooksParams
 */
export const unlikeBook = async (bookId: number) => {
  const response = await httpClient().delete(`/likes/${bookId}`);
  return response.data;
};
