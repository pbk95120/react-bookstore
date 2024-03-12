import { useMain } from "@/hooks/useMain";
import Title from "@/components/common/Title";
import MainReview from "@/components/main/MainReview";
import MainNewBooks from "@/components/main/MainNewBooks";
import MainBest from "@/components/main/MainBest";

const HomePage = () => {
  const { reviews, newBooks, bestBooks } = useMain();

  return (
    <div>
      <section>
        <Title size="large" className="text-orange">
          베스트 셀러
        </Title>
        <MainBest books={bestBooks} />
      </section>
      <section>
        <Title size="large" className="text-orange">
          신간
        </Title>
        <MainNewBooks books={newBooks} />
      </section>
      <section>
        <Title size="large" className="text-orange">
          리뷰
        </Title>
        <MainReview reviews={reviews} />
      </section>
    </div>
  );
};

export default HomePage;
