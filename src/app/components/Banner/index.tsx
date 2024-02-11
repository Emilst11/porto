import Image from "next/image";
import spotlight from "@/app/assets/images/spotlight.svg";
import profile from "@/app/assets/images/profile.png";
import Link from "next/link";
import { Background } from "./Background";

export const Banner = () => {
  const socmed = [
    {
      title: "Whatsapp",
      href: "",
    },
    {
      title: "Email",
      href: "",
    },
    {
      title: "LinkedIn",
      href: "",
    },
  ];
  return (
    <div className="min-h-[100vh] relative flex items-center">
      <div className="container mx-auto space-y-5 p-5">
        <h1>
          <span>Hello</span> There,
        </h1>
        <div className="translate-x-24 space-y-6">
          <h2 className="text-6xl">
            I&rsquo;M <span>Emil Setiawan</span>
          </h2>
          <h3 className="text-4xl">Fullstack Node.js Developer</h3>
          <div className="flex items-strecth gap-5">
            <Image src={profile} alt="emil" />
            <div className="flex flex-col">
              <p className="mt-auto w-1/4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                provident officiis expedita? Inventore a voluptatem corrupti vel
                cum aspernatur rem?
              </p>
              <div className="flex items-center gap-5 mt-auto">
                {socmed.map((item, i) => (
                  <Link href={item.href} key={i}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
};
