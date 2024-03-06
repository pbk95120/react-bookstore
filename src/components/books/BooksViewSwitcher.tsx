import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaList, FaTh } from "react-icons/fa";
import Button from "@/components/common/Button";
import { QUERYSTRING } from "@/constants/querystring";

const viewOptions = [
  {
    value: "list",
    icon: <FaList />,
  },
  {
    value: "grid",
    icon: <FaTh />,
  },
];

const BooksViewSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSwitch = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid");
    }
  }, []);

  return (
    <div className="flex gap-2">
      {viewOptions.map((option) => (
        <Button
          key={option.value}
          size="medium"
          color={
            searchParams.get(QUERYSTRING.VIEW) === option.value
              ? "white"
              : "black"
          }
          onClick={() => {
            handleSwitch(option.value);
          }}
        >
          {option.icon}
        </Button>
      ))}
    </div>
  );
};

export default BooksViewSwitcher;
