import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookItem from "../components/books/BookItem";
import { Book } from "@/types/type";

const dummyBook: Book = {
  id: 1,
  title: "This is a title",
  img: 5,
  category_id: 1,
  summary: "This is a summary",
  author: "John Doe",
  price: 10000,
  likes: 1,
  form: "hardcover",
  isbn: "1234567890",
  detail: "This is a detail",
  pages: 100,
  contents: "This is a content",
  pubDate: "2021-01-01",
};

describe("BookItem 컴포넌트", () => {
  test("렌더 여부", () => {
    render(<BookItem book={dummyBook} />);
    expect(screen.getByText(dummyBook.title)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.summary)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.author)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.likes)).toBeInTheDocument();
    expect(screen.getByText("10,000원")).toBeInTheDocument();
    expect(screen.getByAltText(dummyBook.title)).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dummyBook.img}/600/600`
    );
  });
});
