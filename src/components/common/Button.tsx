import { ButtonProps } from "@/types/type";

/**
 * 공용 버튼 컴포넌트
 */
const Button = ({
  type,
  disabled,
  onClick,
  color,
  size,
  className,
  children,
}: ButtonProps) => {
  let combinedClassName: string = "rounded font-semibold";

  if (disabled) {
    combinedClassName += " opacity-50 pointer-events-none";
  } else {
    combinedClassName += " opacity-100 pointer-events-auto";
  }

  switch (color) {
    case "white": {
      combinedClassName += " text-white bg-midnightblue";
      break;
    }
    case "black": {
      combinedClassName += " text-black bg-lightgray";
      break;
    }
    default: {
      combinedClassName += " text-white bg-midnightblue";
      break;
    }
  }

  switch (size) {
    case "small": {
      combinedClassName += " py-1 px-2 text-xs";
      break;
    }
    case "medium": {
      combinedClassName += " py-2 px-4 text-base";
      break;
    }
    case "large": {
      combinedClassName += " py-4 px-8 text-2xl";
      break;
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => onClick}
      className={`${combinedClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
