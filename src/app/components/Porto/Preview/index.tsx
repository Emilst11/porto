import Image, { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

interface IProps {
  show: boolean;
  image: StaticImageData;
  alter: string;
  close: MouseEventHandler<HTMLDivElement>;
}

export const PreviewImage = ({ show, image, alter, close }: IProps) => {
  if (show)
    return (
      <div
        className="fixed w-full h-full top-0 backdrop-blur-sm bg-base/20 flex items-center justify-center z-20"
        onClick={close}
      >
        <div className="w-1/2 mx-auto min-h-[80vh] relative">
          <button className="absolute top-0 right-0 transition-all border border-transparent hover:border-white rounded-full w-11 aspect-square flex items-center justify-center">X</button>
          <Image
            src={image}
            alt={alter}
            className="w-[90%] mx-auto mt-10 object-cover object-center aspect-video"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    );
};
