import { httpClient, requestHandler } from "@/api/http";
import { FetchBooksParams, FetchBooksResponse } from "@/types/type";

/**
 * 책 목록을 조회하는 API
 * @param FetchBooksParams
 */
export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
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
  return await requestHandler("get", `/books/${bookId}`);
};

/**
 * 책 좋아요 버튼을 누르는 API
 * @param FetchBooksParams
 */
export const likeBook = async (bookId: number) => {
  return await requestHandler("post", `/likes/${bookId}`);
};

/**
 * 책 좋아요 버튼을 취소하는 API
 * @param FetchBooksParams
 */
export const unlikeBook = async (bookId: number) => {
  return await requestHandler("delete", `/likes/${bookId}`);
};

/**
 * 베스트 셀러 목록을 조회하는 API
 * @param FetchBooksParams
 */
export const fetchBestBooks = async () => {
  return await requestHandler("get", `/books/best`);
};
