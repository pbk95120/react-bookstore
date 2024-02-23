import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../components/common/Button";

describe("Button 컴포넌트", () => {
  test("버튼이 렌더링되어야 함", () => {
    render(
      <Button color="white" size="medium">
        클릭하세요
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });

  test("버튼의 타입이 전달된 경우 해당 타입이 적용되어야 함", () => {
    render(
      <Button type="submit" color="white" size="medium">
        제출
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  test("버튼이 비활성화된 경우 해당 클래스가 적용되어야 함", () => {
    render(
      <Button disabled color="white" size="medium">
        비활성화
      </Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass("opacity-50 pointer-events-none");
  });
});
