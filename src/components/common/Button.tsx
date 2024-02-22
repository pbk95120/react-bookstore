interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode; // string + svg
}

const Button = ({ type, children }: ButtonProps) => {
  return <button type={type}>{children}</button>;
};

export default Button;
