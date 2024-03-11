import { requestHandler } from "@/api/http";
import { BookReviewItem, BookReviewItemWrite } from "@/types/type";

/**
 * 리뷰 목록 조회 Get API
 * @returns 카테고리 목록
 */
export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews/${bookId}`);
};

interface AddBookReviewResponse {
  message: string;
}

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

export const fetchReviewAll = async () => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews`);
};
