import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import ThemeSwitchButton from "@/components/common/ThemeSwitchButton";

const HomePage = () => {
  return (
    <div>
      <Title color="brown" size="small">
        제목 테스트
      </Title>
      <ThemeSwitchButton />
      <Button color="black" size="medium">
        버튼 테스트
      </Button>
      <Button type="submit" color="white" size="large">
        버튼 테스트
      </Button>
    </div>
  );
};

export default HomePage;
