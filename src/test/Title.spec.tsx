import { render, screen } from "@testing-library/react";
import Title from "../components/common/Title";

describe("Title 컴포넌트 테스트", () => {
  render(
    <Title color="brown" size="lg">
      제목 테스트
    </Title>
  );

  expect(screen.getByText("제목 테스트")).toBeInTheDocument();
});
