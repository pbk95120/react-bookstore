import { Banner as IBanner } from "@/types/type";

interface Props {
  banner: IBanner;
}

function BannerItem({ banner }: Props) {
  return (
    <div className="flex grow-0 shrink-0 basis-full items-center justify-center text-center relative">
      <div>
        <img
          src={banner.image}
          alt={banner.title}
          className="w-full max-w-full"
        />
      </div>
      <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-1 text-orange">{banner.title}</h2>
        <p className="text-xl">{banner.description}</p>
      </div>
    </div>
  );
}

export default BannerItem;
