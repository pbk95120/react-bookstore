import { useState, useEffect } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "@/types/type";
import { useLocation } from "react-router-dom";

/**
 * 카테고리 목록을 조회하는 훅
 */
export const useCategory = () => {
  const loacation = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(loacation.search);
    if (params.get("category_id")) {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.category_id === Number(params.get("category_id")),
          };
        });
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;

      const categoryWithAll = [
        { category_id: null, categoryName: "전체" },
        ...category,
      ];
      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [loacation.search]);

  return { category };
};
