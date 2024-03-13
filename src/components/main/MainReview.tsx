import { BookReviewItem as IBookReviewItem } from "@/types/type";
import BookReviewItem from "@/components/book/BookReviewItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  reviews: IBookReviewItem[];
}

export const MainReview = ({ reviews }: Props) => {
  const sliderSettings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="pb-6">
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <div className="pr-6">
            <BookReviewItem key={review.id} review={review} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainReview;
