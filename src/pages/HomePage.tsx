import { useMain } from "@/hooks/useMain";
import MainReview from "@/components/main/MainReview";

const HomePage = () => {
  const { reviews } = useMain();

  return (
    <div>
      <MainReview reviews={reviews} />
    </div>
  );
};

export default HomePage;
