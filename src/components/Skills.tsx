import { GrLanguage } from "react-icons/gr";
import { CloudIcon, Computer } from "lucide-react";
import { FaHtml5 } from "react-icons/fa";
import SkillCategory from "./SkillCategory";
import Line from "./Line";

const ITEMS = [{
  image: <GrLanguage size={40} />,
  title: 'Language',
  libraries: ["Typescript", "Javascript", "Python"]
},
{
  image: <FaHtml5 size={40} />,
  title: 'Frontend',
  libraries: ["React", "Next", "Vue"]
},
{
  image: <Computer size={40} />,
  title: 'Backend',
  libraries: ["Firebase", "Supabase", "Nhost", "Nest"]
},
{
  image: <CloudIcon size={40} />,
  title: 'Cloud',
  libraries: ["AWS", "Vercel", "Render", "Git"]
}];


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-yellow-300">
      <div className="container mx-auto text-center">
        <Line content="Skills" />
        <p className="flex flex-col gap-5 p-10 rounded-xl justify-center bg-white/80 mt-10">
          {ITEMS.map((item, i) => <SkillCategory key={i}{...item} />)}
        </p>
      </div>
    </section>
  );
}

export default Skills;