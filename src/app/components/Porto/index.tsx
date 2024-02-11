"use client";

import dots from "@/app/assets/images/dots.svg";
import background from "@/app/assets/images/card.png";
import Image from "next/image";
import { Pills } from "./Pills";
import { MouseEvent, useState } from "react";
import { CardPorto } from "./CardPorto";
import { PreviewImage } from "./Preview";

export const PortoFolio = () => {
  const [filter, setFilter] = useState<string>("all");
  const [isShow, setIsShow] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const filters: string[] = ["all", "frontend", "backend"];

  const handleClick = (id: number) => {
    setIndex(id);
    setIsShow(true);
  };

  const data = [
    {
      name: "Jhon Doe",
      dates: "2022",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam placeat harum facilis fugit accusantium sunt.",
      image: background,
      image_preview: background,
    },
    {
      name: "Jhon Doe",
      dates: "2022",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam placeat harum facilis fugit accusantium sunt.",
      image: background,
      image_preview: background,
    },
    {
      name: "Jhon Doe",
      dates: "2022",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam placeat harum facilis fugit accusantium sunt.",
      image: background,
      image_preview: background,
    },
    {
      name: "Jhon Doe",
      dates: "2022",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam placeat harum facilis fugit accusantium sunt.",
      image: background,
      image_preview: background,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Image
        src={dots}
        alt="backgrounds"
        className="absolute -top-14 left-10 w-1/6 -z-10"
      />
      <div className="container mx-auto p-5 space-y-10">
        <div className="flex items-center justify-between">
          <h2>
            <span>MY</span> WORKS
          </h2>
          <div className="flex items-center gap-5">
            {filters.map((item, i) => (
              <Pills key={i} onclick={() => setFilter(item)} filter={filter}>
                {item}
              </Pills>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {data.map((item, i) => (
            <CardPorto
              image={item.image}
              name={item.name}
              dates={item.dates}
              desc={item.desc}
              onClick={() => handleClick(i)}
              key={i}
            />
          ))}
        </div>
      </div>
      <PreviewImage
        show={isShow}
        image={data[index].image_preview}
        close={() => setIsShow(false)}
        alter='preview'
      />
    </div>
  );
};
