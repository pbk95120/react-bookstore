import { setupWorker } from "msw/browser";
import { reviewsById, addReview, reviewForMain } from "@/mock/review";
import { bestBooks } from "@/mock/books";

const handlers = [reviewsById, addReview, reviewForMain, bestBooks];

export const worker = setupWorker(...handlers);
