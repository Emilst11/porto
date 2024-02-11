interface IProps {
    title: string
    desc: string
}

export const ServiceCard = ({ title, desc }: IProps) => {
  const words = desc.split(" ");
  const firstWord = words.shift();
  const restOfText = words.join(" ");
  return (
    <div className="group hover:bg-base border border-dark px-10 flex items-center min-h-[50vh] hover:shadow-2xl transition-all">
      <div>
        <p className="text-primary text-2xl font-semibold my-5">{title}</p>
        <p className="text-secondary text-lg group-hover:text-white transition-all">
          <span>{firstWord} </span>
          {restOfText}
        </p>
      </div>
    </div>
  );
};
