import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InputText from "@/components/common/InputText";

describe("InputText 컴포넌트", () => {
  test("플레이스홀더가 렌더링되어야 함", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<InputText placeholder="입력하세요" ref={ref} />);

    const inputElement = screen.getByPlaceholderText("입력하세요");

    expect(inputElement).toBeInTheDocument();
  });
});
