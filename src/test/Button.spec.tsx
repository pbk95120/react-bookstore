import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../components/common/Button";

describe("Button 컴포넌트", () => {
  test("버튼 렌더링 확인", () => {
    render(
      <Button color="white" size="medium">
        클릭하세요
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });

  test("버튼의 Type 확인", () => {
    render(
      <Button type="submit" color="white" size="medium">
        제출
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  test("버튼의 disabled 확인", () => {
    render(
      <Button disabled color="white" size="medium">
        비활성화
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass("opacity-50 pointer-events-none");
  });
});
