import { useEffect, useState } from "react";
import { BookReviewItem } from "@/types/type";
import { fetchReviewAll } from "@/api/review.api";

export const useMain = () => {
  const [reviews, setReviews] = useState<BookReviewItem[]>([]);

  useEffect(() => {
    fetchReviewAll().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return { reviews };
};
