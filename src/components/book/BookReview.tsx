import { BookReviewItem as IBookReviewItem } from "@/types/type";
import BookReviewItem from "./BookReviewItem";

interface Props {
  reviews: IBookReviewItem[];
}

const BookReview = ({ reviews }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review) => (
        <BookReviewItem review={review} key={review.id} />
      ))}
    </div>
  );
};

export default BookReview;
