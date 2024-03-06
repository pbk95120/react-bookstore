import { useState, useEffect } from "react";
import { fetchBook, likeBook, unlikeBook } from "@/api/books.api";
import { addCart } from "@/api/carts.api";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { BookDetail, BookReviewItem } from "@/types/type";
import { fetchBookReview } from "@/api/review.api";

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [cartAdded, setCardAdded] = useState(false);
  const [reviews, setReviews] = useState<BookReviewItem[]>([]);
  const { isLoggedIn } = useAuthStore();
  const { showAlert } = useAlert();

  const likeToggle = () => {
    if (!isLoggedIn) {
      showAlert("로그인이 필요한 기능입니다.");
      return;
    }

    if (!book) return;

    if (book.liked) {
      unlikeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: false,
          likes: book.likes - 1,
        });
      });
    } else {
      likeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        });
      });
    }
  };

  const AddToCart = (qunatity: number) => {
    if (!book) return;
    addCart({ book_id: book.id, quantity: qunatity }).then(() => {
      setCardAdded(true);
      setTimeout(() => {
        setCardAdded(false);
      }, 3000);
    });
  };

  useEffect(() => {
    if (!bookId) return;

    fetchBook(bookId).then((data) => {
      setBook(data);
    });

    fetchBookReview(bookId).then((data) => {
      setReviews(data);
    });
  }, [bookId]);

  return { book, likeToggle, AddToCart, cartAdded, reviews };
};
