import { ButtonColor, ButtonSize, ButtonType } from "@/types/type";

interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  isLoading?: boolean;
  color: ButtonColor;
  size: ButtonSize;
  className?: string;
  children: React.ReactNode; // string + svg
}

const Button = ({
  type,
  disabled,
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
      className={`${combinedClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
