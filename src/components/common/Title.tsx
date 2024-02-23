import { Color, Size } from "@/types/type";

interface TitleProps {
  color: Color;
  size: Size;
  className?: string;
  children: React.ReactNode;
}

const Title = ({ color, size, className, children }: TitleProps) => {
  let combinedClassName: string = "rounded-lg border font-semibold";

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
  }

  switch (size) {
    case "sm": {
      combinedClassName += " text-Csm";
      break;
    }
    case "md": {
      combinedClassName += " text-Cmd";
      break;
    }
    case "lg": {
      combinedClassName += " text-Clg";
      break;
    }
  }
  return <div className={`${combinedClassName} ${className}`}>{children}</div>;
};

export default Title;
