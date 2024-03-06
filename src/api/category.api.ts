import { requestHandler } from "@/api/http";
import { Category } from "@/types/type";

/**
 * 카테고리 목록 조회 API
 * @returns 카테고리 목록
 */
export const fetchCategory = async () => {
  return await requestHandler<Category[]>("get", "/categories");
};
