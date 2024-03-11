import { BookReviewItem as IBookReviewItem } from "@/types/type";
import BookReviewItem from "@/components/book/BookReviewItem";
import Slider from "react-slick";

interface Props {
  reviews: IBookReviewItem[];
}

export const MainReview = ({ reviews }: Props) => {
  return (
    <div>
      <Slider>
        {reviews.map((review) => (
          <BookReviewItem key={review.id} review={review} />
        ))}
      </Slider>
    </div>
  );
};

export default MainReview;
