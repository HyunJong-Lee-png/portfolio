export interface ProjectData {
  title: string;
  date: string;
  titleInfo: string;
  background: string;
  role: string;
  frontend: string[];
  backend?: string[];
  results: string[];
  jobFit: string[];
  skills: string[];
  link: string;
}

export default function Project({
  title,
  date,
  titleInfo,
  background,
  role,
  frontend,
  backend,
  results,
  jobFit,
  skills,
  link,
}: ProjectData) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-[640px]">
      <div className="font-semibold bg-red-500 rounded-lg px-3 py-2 text-white text-nowrap shadow-md inline-block">
        {title}
      </div>

      <p className="mt-3 border-b-2 border-b-[#6c757d] text-gray-500 pb-2">
        {date}
      </p>

      <h3 className="font-bold text-xl mt-4">{titleInfo}</h3>

      <div className="mt-4 space-y-4 text-sm leading-6 text-left">
        <InfoBlock title="활동 배경" content={background} />
        <InfoBlock title="맡은 역할" content={role} />
        <ListBlock title="Frontend 구현" items={frontend} />

        {backend && backend.length > 0 && (
          <ListBlock title="Backend 구현" items={backend} />
        )}

        <ListBlock title="성과 및 배운 점" items={results} />
        <ListBlock title="직무 연관성" items={jobFit} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-yellow-200 rounded-md border-2 border-yellow-400 px-2 py-1 shadow-sm text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 inline-block break-all"
      >
        {link}
      </a>
    </div>
  );
}

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="font-bold text-red-500">&lt;{title}&gt;</h4>
      <p className="mt-1 text-gray-700">{content}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-red-500">&lt;{title}&gt;</h4>
      <ul className="mt-1 space-y-1">
        {items?.map((item, index) => (
          <li key={index} className="list-disc list-inside text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}