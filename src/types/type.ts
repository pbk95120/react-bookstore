// Title ================================================
export type TitleColor = "brown" | "lightgray" | "blue" | "green" | "orange";
export type TitleSize = "small" | "medium" | "large";
export interface TitleProps {
  color?: TitleColor;
  size: TitleSize;
  className?: string;
  children: React.ReactNode;
}

// Button ================================================
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

// InputText ================================================
export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name?: string;
  inputType?: "text" | "password" | "email" | "number" | "tel";
  className?: string;
}

// Route ================================================
export interface RouteError {
  statusText?: string;
  message?: string;
}

// View ================================================
export interface Pagination {
  currentPage: number;
  totalCount: number;
}

export type ViewMode = "list" | "grid";

// User ================================================
export interface User {
  id: number;
  email: string;
  password?: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface SignupProps {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

// Category ================================================
export interface Category {
  category_id: number | null;
  categoryName: string;
  isActive?: boolean;
}

// Book ================================================
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

export type BookReviewItemWrite = Pick<BookReviewItem, "content" | "score">;

// Cart ================================================
export interface Cart {
  id: number;
  bookId: number;
  title: string;
  summary: string;
  quantity: number;
  price: number;
}

export interface AddCartParams {
  book_id: number;
  quantity: number;
}

// Order ================================================
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

export interface OrderSheet {
  items: number[];
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: {
    address: string;
    receiver: string;
    contact: string;
  };
}

export interface Delivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface OrderDetailItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export interface OrderListItem extends Order {
  detail?: OrderDetailItem[];
}

// Review ================================================
export interface BookReviewItem {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}

// Toast ================================================
export type ToastType = "info" | "error";

export interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

export interface ToastStore {
  toasts: ToastItem[];
  addToast: (message: string, type?: ToastType) => void;
  removeToast: (id: number) => void;
}

// Banner ================================================
export interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  target: string;
}
