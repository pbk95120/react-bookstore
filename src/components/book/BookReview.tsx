import {
  BookReviewItem as IBookReviewItem,
  BookReviewItemWrite,
} from "@/types/type";
import BookReviewItem from "@/components/book/BookReviewItem";
import BookReviewAdd from "@/components/book/BookReviewAdd";

interface Props {
  reviews: IBookReviewItem[];
  onAdd: (data: BookReviewItemWrite) => void;
}

const BookReview = ({ reviews, onAdd }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <BookReviewAdd onAdd={onAdd} />
      {reviews.map((review) => (
        <BookReviewItem review={review} key={review.id} />
      ))}
    </div>
  );
};

export default BookReview;
