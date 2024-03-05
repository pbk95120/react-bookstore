import { TitleProps } from "@/types/type";

/**
 * 공용 Title 컴포넌트
 */
const Title = ({ color, size, className, children }: TitleProps) => {
  let combinedClassName: string = "rounded-lg font-semibold";

  switch (color) {
    case "brown": {
      combinedClassName += " text-brown";
      break;
    }
    case "lightgray": {
      combinedClassName += " text-lightgray";
      break;
    }
    case "blue": {
      combinedClassName += " text-blue";
      break;
    }
    case "green": {
      combinedClassName += " text-green";
      break;
    }
    case "orange": {
      combinedClassName += " text-orange";
      break;
    }
    default: {
      combinedClassName += " text-black";
      break;
    }
  }

  switch (size) {
    case "small": {
      combinedClassName += " text-small";
      break;
    }
    case "medium": {
      combinedClassName += " text-medium";
      break;
    }
    case "large": {
      combinedClassName += " text-large";
      break;
    }
  }
  return <div className={`${combinedClassName} ${className}`}>{children}</div>;
};

export default Title;
