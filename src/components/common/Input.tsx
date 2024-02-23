type InputColor = "primary" | "secondary" | "third";
type InputSize = "sm" | "md" | "lg";

interface InputProps {
  children: React.ReactNode;
  color: InputColor;
  size: InputSize;
}

const Input = ({ type }) => {};

export default Input;
