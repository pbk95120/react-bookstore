import { requestHandler } from "./http";
import { Banner } from "@/types/type";

export const fetchBanners = async () => {
  return await requestHandler<Banner[]>("get", "/banners");
};
