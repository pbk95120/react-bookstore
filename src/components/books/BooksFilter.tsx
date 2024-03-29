import { useSearchParams } from "react-router-dom";
import { useCategory } from "@/hooks/useCategory";
import { QUERYSTRING } from "@/constants/constant";
import Button from "@/components/common/Button";

const BooksFilter = () => {
  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (id === null) {
      newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
    } else {
      newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
    }
    setSearchParams(newSearchParams);
  };

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (newSearchParams.get(QUERYSTRING.NEWS)) {
      newSearchParams.delete(QUERYSTRING.NEWS);
    } else {
      newSearchParams.set(QUERYSTRING.NEWS, "true");
    }
    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex gap-2">
      <div className="flex gap-2 mr-4">
        {category.map((item) => (
          <Button
            size="medium"
            color={item.isActive ? "white" : "black"}
            key={item.category_id}
            onClick={() => handleCategory(item.category_id)}
          >
            {item.categoryName}
          </Button>
        ))}
      </div>
      <div>
        <Button
          size="medium"
          color={searchParams.get(QUERYSTRING.NEWS) ? "white" : "black"}
          onClick={() => handleNews()}
        >
          신간
        </Button>
      </div>
    </div>
  );
};

export default BooksFilter;
