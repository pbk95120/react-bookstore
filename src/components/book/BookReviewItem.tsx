import { FaStar } from "react-icons/fa";
import { BookReviewItem as IBookReviewItem } from "@/types/type";
import { formatDate } from "@/utils/format";

interface Props {
  review: IBookReviewItem;
}

const Star = (props: Pick<IBookReviewItem, "score">) => {
  return (
    <span className="flex pl-2">
      {Array.from({ length: props.score }, (_, index) => (
        <FaStar key={index} className="text-orange" />
      ))}
    </span>
  );
};

const BookReviewItem = ({ review }: Props) => {
  return (
    <div className="flex flex-col gap-3 shadow p-3 rounded">
      <header className="flex justify-between items-center text-sm">
        <div className="flex items-center">
          <span>{review.userName}</span>
          <Star score={review.score} />
        </div>
        <div>{formatDate(review.createdAt)}</div>
      </header>
      <div>
        <p className="text-base	leading-6">{review.content}</p>
      </div>
    </div>
  );
};

export default BookReviewItem;
