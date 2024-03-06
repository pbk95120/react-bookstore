import { setupWorker } from "msw/browser";
import { reviewsById } from "@/mock/review";

const handlers = [reviewsById];

export const worker = setupWorker(...handlers);
