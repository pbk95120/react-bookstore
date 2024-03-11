import { setupWorker } from "msw/browser";
import { reviewsById, addReview, reviewForMain } from "@/mock/review";

const handlers = [reviewsById, addReview, reviewForMain];

export const worker = setupWorker(...handlers);
