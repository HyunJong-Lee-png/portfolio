interface Props {
  title: string;
  date: string;
  titleInfo: string;
  description: string[];
  skills: string;
  link: string;
};

export default function Project({ title, date, titleInfo, description, skills, link }: Props) {
  return (
    (
      <div className="bg-white p-6 shadow-lg rounded-lg w-[500px]">
        <div className="font-semibold bg-red-500 rounded-lg p-2 text-white text-nowrap shadow-md inline-block">{title}</div>
        <p className="mt-2 border-b-2 border-b-[#6c757d] text-gray-500 pb-2">{date}</p>
        <div className="font-bold text-xl mt-2">{titleInfo}</div>
        <ul className="mt-2">
          {description.map((item, i) => <li key={i} className="list-disc list-inside">{item}</li>)}
        </ul>
        <div className="bg-yellow-200 rounded-md border-2 border-yellow-400 p-1 px-2 shadow-md mt-2 inline-block">{skills}</div>
        <a href={link} target="_blank" className="text-blue-500 mt-4 inline-block">{link}</a>
      </div>
    )
  );
}