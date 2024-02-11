import Image from "next/image";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import spotlight from "@/app/assets/images/spotlight.svg";
import { Services } from "./components/Services";
import { Experiences } from "./components/Experience";
import { PortoFolio } from "./components/Porto";
import { Feedbacks } from "./components/Feedbacks";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <Image
        src={spotlight}
        alt="lights"
        className="absolute -top-1/3 -right-1/4 w-2/3 -z-10"
      />
      <Banner/>
      <Image
        src={spotlight}
        alt="lights"
        className="absolute bottom-1/2 -left-1/4 w-1/2 -z-10"
      />
      <About/>
      <Services/>
      <Image
        src={spotlight}
        alt="lights"
        className="absolute bottom-0 -right-1/4 w-2/3 -z-10"
      />
      <Experiences/>
      <PortoFolio/>
      <Feedbacks/>
    </div>
  );
}
