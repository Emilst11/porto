import Image, { StaticImageData } from "next/image";
import background from "@/app/assets/images/card.png";
import { MouseEventHandler } from "react";

interface IProps {
  image: string | StaticImageData;
  name: string;
  dates: string;
  desc?: string;
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const CardPorto = ({
  image,
  name,
  dates,
  desc,
  onClick
}: IProps) => {
  return (
      <div className="relative" onClick={onClick}>
        <Image
          src={background}
          alt="portfolio"
          className="w-full object-cover object-center aspect-video"
        />
        <div className="absolute group top-0 transition-all w-full hover:bg-secondary/40 hover:backdrop-blur-sm bg-transparent aspect-video flex items-center justify-center">
          <div className="hidden group-hover:block text-center">
            <p className="text-2xl font-semibold capitalize">Learntera</p>
            <p>date start - date end</p>
            <p className="w-2/3 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              placeat harum facilis fugit accusantium sunt.
            </p>
          </div>
        </div>
      </div>
  );
};
