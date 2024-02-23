type ButtonColor = "white" | "black";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
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
  let combinedClassName: string = "rounded-lg border font-semibold";

  switch (color) {
    case "white": {
      combinedClassName += " text-black border-black bg-white";
      break;
    }
    case "black": {
      combinedClassName += " text-white border-white bg-black";
      break;
    }
  }

  switch (size) {
    case "sm": {
      combinedClassName += " py-1.5 px-3 text-sm";
      break;
    }
    case "md": {
      combinedClassName += " py-2 px-4 text-md";
      break;
    }
    case "lg": {
      combinedClassName += " py-2 px-4 text-lg";
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
