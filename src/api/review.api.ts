import { requestHandler } from "@/api/http";
import {
  BookReviewItem,
  BookReviewItemWrite,
  AddBookReviewResponse,
} from "@/types/type";

/**
 * 리뷰 목록 조회 Get API
 * @returns 카테고리 목록
 */
export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews/${bookId}`);
};

/**
 * 리뷰 작성 Post API
 * @returns 카테고리 목록
 */
export const addBookReview = async (
  bookId: string,
  data: BookReviewItemWrite
) => {
  return await requestHandler<AddBookReviewResponse>(
    "post",
    `/reviews/${bookId}`
  );
};

/**
 * 메인화면 리뷰 조회 API
 * @returns 카테고리 목록
 */
export const fetchReviewAll = async () => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews`);
};
