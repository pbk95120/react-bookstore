import { useState, useEffect } from "react";
import { fetchBook, likeBook, unlikeBook } from "@/api/books.api";
import { addCart } from "@/api/carts.api";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { useToast } from "@/hooks/useToast";
import { BookDetail, BookReviewItem, BookReviewItemWrite } from "@/types/type";
import { addBookReview, fetchBookReview } from "@/api/review.api";

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [cartAdded, setCardAdded] = useState(false);
  const [reviews, setReview] = useState<BookReviewItem[]>([]);
  const { isLoggedIn } = useAuthStore();
  const { showAlert } = useAlert();
  const { showToast } = useToast();

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
        showToast("좋아요를 취소했습니다.");
      });
    } else {
      likeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        });
        showToast("좋아요를 성공했습니다.");
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
      setReview(data);
    });
  }, [bookId]);

  const addReview = (data: BookReviewItemWrite) => {
    if (!book) return;

    addBookReview(book.id.toString(), data).then((res) => {
      fetchBookReview(book.id.toString()).then((reviews) => {
        showAlert(res.message);
        setReview(reviews);
      });
    });
  };

  return { book, likeToggle, AddToCart, cartAdded, reviews, addReview };
};
