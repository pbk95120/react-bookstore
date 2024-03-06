import { requestHandler } from "@/api/http";
import { BookReviewItem } from "@/types/type";

/**
 * 리뷰 목록 조회 Get API
 * @returns 카테고리 목록
 */
export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews/${bookId}`);
};
