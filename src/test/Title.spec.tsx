import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "../components/common/Title";

describe("Title 컴포넌트", () => {
  test("color prop이 주어지지 않으면 기본값 'brown'으로 렌더링되어야 함", () => {
    render(<Title size="medium">테스트 제목</Title>);

    const titleElement = screen.getByText("테스트 제목");

    expect(titleElement).toHaveClass("text-brown");
  });

  test("size props 확인", () => {
    render(<Title size="small">테스트 제목</Title>);

    const titleElement = screen.getByText("테스트 제목");

    expect(titleElement).toHaveClass("text-small");
  });

  test("color props 확인", () => {
    render(
      <Title size="small" color="blue">
        테스트 제목
      </Title>
    );

    const titleElement = screen.getByText("테스트 제목");

    expect(titleElement).toHaveClass("text-blue");
  });

  test("전달된 className 확인", () => {
    render(
      <Title size="large" className="custom-class">
        테스트 제목
      </Title>
    );

    const titleElement = screen.getByText("테스트 제목");

    expect(titleElement).toHaveClass("custom-class");
  });
});
