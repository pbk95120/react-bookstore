export type TitleColor = "brown" | "lightgray" | "blue" | "green";
export type TitleSize = "small" | "medium" | "large";
export interface TitleProps {
  color?: TitleColor;
  size: TitleSize;
  className?: string;
  children: React.ReactNode;
}

export type ButtonType = "button" | "submit" | "reset";
export type ButtonColor = "white" | "black";
export type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  isLoading?: boolean;
  color: ButtonColor;
  size: ButtonSize;
  className?: string;
  children: React.ReactNode; // string + svg
}

export interface InputTextProps {
  placeholder?: string;
}
