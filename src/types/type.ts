export type TitleColor = "brown" | "lightgray" | "blue" | "green";
export type TitleSize = "small" | "medium" | "large";
export interface TitleProps {
  color?: TitleColor;
  size: TitleSize;
  className?: string;
  children: React.ReactNode;
}

export type ButtonType = "button" | "submit" | "reset";
export type ButtonColor = "white" | "black" | "coral";
export type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  color: ButtonColor;
  size: ButtonSize;
  className?: string;
  children: React.ReactNode; // string + svg
}

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name?: string;
  inputType?: "text" | "password" | "email" | "number" | "tel";
  className?: string;
}

export interface RouteError {
  statusText?: string;
  message?: string;
}

export interface User {
  id: number;
  email: string;
  password?: string;
}

export interface Category {
  category_id: number | null;
  categoryName: string;
  isActive?: boolean;
}

export interface Book {
  id: number;
  title: string;
  img: number;
  category_id: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  likes: number;
  pubDate: string;
}

export interface BookDetail extends Book {
  categoryName: string;
  liked: boolean;
}

export interface Pagination {
  currentPage: number;
  totalCount: number;
}

export interface Cart {
  id: number;
  bookId: number;
  title: string;
  summary: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  createdAt: string;
  address: string;
  receiver: string;
  contact: string;
  bookTitle: string;
  totalQuantity: number;
  totalPrice: number;
}

export interface SignupProps {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface Pagination {
  currentPage: number;
  totalCount: number;
}

export interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

export interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export type ViewMode = "list" | "grid";
