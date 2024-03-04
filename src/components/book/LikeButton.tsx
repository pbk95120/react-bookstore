import { FaHeart } from "react-icons/fa";
import Button from "../common/Button";
import { BookDetail } from "@/types/type";

interface Props {
  book: BookDetail;
  onClick: () => void;
}

const LikeButton = ({ book, onClick }: Props) => {
  return (
    <div>
      <Button
        size="medium"
        color={book.liked ? "coral" : "black"}
        className="flex gap-1.5 items-center"
        onClick={onClick}
      >
        <FaHeart />
        {book.likes}
      </Button>
    </div>
  );
};

export default LikeButton;
