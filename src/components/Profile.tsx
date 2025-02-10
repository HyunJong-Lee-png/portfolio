import { ReactNode } from "react";

interface Props {
  image: ReactNode,
  title: string,
  description: string
}

export default function Profile({ image, title, description }: Props) {
  return (
    <div className="flex gap-5">
      <div className="flex justify-center items-center">{image}</div>
      <div className="flex flex-col gap-1 text-justify">
        <div className="font-bold font-sans">{title}</div>
        <div className={`font-sans text-sm ${description.length > 10 ? "text-nowrap" : "text-wrap"}`}>{description}</div>
      </div>
    </div>
  );
}