import Title from "../components/common/Title";
import Button from "../components/common/Button";
import ThemeSwitchButton from "../components/common/ThemeSwitchButton";

const HomePage = () => {
  return (
    <div>
      <Title color="brown" size="lg">
        제목 테스트
      </Title>
      <ThemeSwitchButton />
      <Button color="black" size="md">
        버튼 테스트
      </Button>
      <Button color="white" size="lg">
        버튼 테스트
      </Button>
    </div>
  );
};

export default HomePage;
