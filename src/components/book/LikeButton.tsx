import { FaHeart } from "react-icons/fa";
import { BookDetail } from "@/types/type";
import Button from "@/components/common/Button";

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
