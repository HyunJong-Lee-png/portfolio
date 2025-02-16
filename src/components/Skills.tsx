import { GrLanguage } from "react-icons/gr";
import { CloudIcon, Computer, DatabaseBackup, Option } from "lucide-react";
import { FaHtml5 } from "react-icons/fa";
import SkillCategory from "./SkillCategory";
import Line from "./Line";

const ITEMS = [{
  image: <GrLanguage size={40} />,
  title: 'Language',
  libraries: ["Typescript", "Javascript"]
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
  image: <DatabaseBackup size={40} />,
  title: 'DataBase',
  libraries: ["MySQL,PostgreSQL, MongoDB, Neon"]
},
{
  image: <Option size={40} />,
  title: 'CI/CD',
  libraries: ["GitHub Actions, Vercel, Netlify, Render"]
}
  , {
  image: <CloudIcon size={40} />,
  title: 'Cloud Service',
  libraries: ["AWS (S3, Lambda), Firebase Hosting, MongoDB Atlas"]
}];


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-yellow-300">
      <div className="container mx-auto text-center">
        <Line content="Skills" />
        <p className="flex flex-col gap-5 rounded-xl bg-white/80 mt-10 max-w-5xl mx-auto p-10 shadow-md">
          {ITEMS.map((item, i) => <SkillCategory key={i}{...item} />)}
        </p>
      </div>
    </section>
  );
}

export default Skills;