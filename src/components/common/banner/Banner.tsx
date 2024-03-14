import { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Banner as IBanner } from "@/types/type";
import BannerItem from "@/components/common/banner/BannerItem";

interface Props {
  banners: IBanner[];
}

function Banner({ banners }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex === banners.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const transFormValue = useMemo(() => {
    return currentIndex * -100;
  }, [currentIndex]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex ease-in-out"
        style={{ transform: `translateX(${transFormValue}%)` }}
      >
        {banners.map((item) => (
          <BannerItem key={item.id} banner={item} />
        ))}
      </div>
      <div>
        <button
          className="w-10 h-10 rounded-full text-3xl flex itmes-center justify-center absolute top-1/2 -translate-y-2/4 left-3"
          onClick={handlePrev}
        >
          <FaAngleLeft className="fill-white" />
        </button>
        <button
          className="w-10 h-10 rounded-full text-3xl flex itmes-center justify-center absolute top-1/2 -translate-y-2/4 right-3"
          onClick={handleNext}
        >
          <FaAngleRight className="fill-white" />
        </button>
      </div>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={
              index === currentIndex
                ? "inline-block w-4 h-4 rounded-full bg-white mx-1 bg-orange"
                : "inline-block w-4 h-4 rounded-full bg-white mx-1"
            }
            onClick={() => {
              handleIndicatorClick(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Banner;
