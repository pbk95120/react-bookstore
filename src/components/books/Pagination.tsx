import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "@/constants/querystring";
import { Pagination as IPagination } from "@/types/type";
import { LIMIT } from "@/constants/pagination";
import Button from "@/components/common/Button";

interface Props {
  pagination: IPagination;
}

const Pagination = ({ pagination }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalCount } = pagination;
  const pages: number = Math.ceil(totalCount / LIMIT);

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString());

    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex justify-start items-center py-6">
      {pages > 0 && (
        <ol className="list-noneflex gap-2 p-0 m-0">
          {Array(pages)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <Button
                  key={index}
                  size="small"
                  color={
                    index + 1 === pagination.currentPage ? "white" : "black"
                  }
                  onClick={() => handleClickPage(index + 1)}
                >
                  {index + 1}
                </Button>
              </li>
            ))}
        </ol>
      )}
    </div>
  );
};

export default Pagination;
