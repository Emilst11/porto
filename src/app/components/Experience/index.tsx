import { ExperienceBlock } from "./ExperienceBlock";

export const Experiences = () => {
  return (
    <div className="container mx-auto min-h-[90vh] flex flex-col">
      <h2 className="text-center">
        <span>MY</span> EXPERIENCES
      </h2>
      <div className="w-1/2 mx-auto mt-14 space-y-5">
        <ExperienceBlock />
        <ExperienceBlock />
        <ExperienceBlock />
      </div>
    </div>
  );
};
