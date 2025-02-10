import { ReactNode } from "react";

interface Props {
  image: ReactNode,
  title: string,
  libraries: string[],
}

export default function SkillCategory({ image, title, libraries }: Props) {
  return (
    <div className="flex gap-5 sm:flex-row flex-col">
      <div className="flex gap-3 items-center text-2xl min-w-40">
        {image}
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {libraries.map((library, i) => <div key={i} className="flex justify-center items-center rounded-xl px-3 bg-red-500 font-bold">{library}</div>)}
      </div>
    </div>
  );
}