import { Category } from "@/types/type";
import { httpClient } from "./http";

/**
 * 카테고리 목록 조회 API
 * @returns 카테고리 목록
 */
export const fetchCategory = async () => {
  const response = await httpClient().get<Category[]>("/categories");
  return response.data;
};
