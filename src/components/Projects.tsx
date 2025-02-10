import Line from "./Line";

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  { title: "포트폴리오 웹사이트", description: "A personal portfolio built with React and Tailwind.", link: "#" },
  { title: "E-commerce App", description: "A fully responsive e-commerce app using Next.js.", link: "#" },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <Line content="Projects" />
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg w-80">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 inline-block">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;