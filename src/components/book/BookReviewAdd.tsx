import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import { BookReviewItemWrite } from "@/types/type";

interface Props {
  onAdd: (data: BookReviewItemWrite) => void;
}

const BookReviewAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookReviewItemWrite>();

  return (
    <div className="flex flex-col gap-1.5">
      <form onSubmit={handleSubmit(onAdd)}>
        <fieldset className="flex flex-col gap-3 justify-end">
          <textarea
            className="w-full h-24 border border-solid rounded p-3"
            {...register("content", { required: true })}
          ></textarea>
          {errors.content && (
            <p className="text-red-600 ">리뷰 내용을 입력해 주세요.</p>
          )}
        </fieldset>
        <fieldset className="flex gap-3 justify-end mt-2">
          <select
            className="border border-solid rounded"
            {...register("score", { required: true, valueAsNumber: true })}
          >
            <option value="1">1점</option>
            <option value="2">2점</option>
            <option value="3">3점</option>
            <option value="4">4점</option>
            <option value="5">5점</option>
          </select>
          <Button size="medium" color="white">
            작성하기
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default BookReviewAdd;
