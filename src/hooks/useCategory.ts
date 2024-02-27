import { useState, useEffect } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "@/types/type";

/**
 * 카테고리 목록을 조회하는 훅
 */
export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;

      const categoryWithAll = [
        { category_id: null, category_name: "전체" },
        ...category,
      ];
      setCategory(categoryWithAll);
    });
  }, []);

  return { category };
};
