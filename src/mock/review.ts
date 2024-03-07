import { BookReviewItem } from "@/types/type";
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker/locale/ko";

const mockReviewData: BookReviewItem[] = Array.from(
  { length: 8 },
  (_, index) => ({
    id: index,
    userName: `${faker.person.lastName()}${faker.person.firstName()}`,
    content: faker.lorem.paragraph(),
    createdAt: faker.date.recent().toISOString(),
    score: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
  })
);

export const reviewsById = http.get("/api/reviews/:bookId", () => {
  return HttpResponse.json(mockReviewData, { status: 200 });
});

export const addReview = http.post("/api/reviews/:bookId", () => {
  return HttpResponse.json(
    { message: "리뷰가 등록되었습니다" },
    { status: 200 }
  );
});
