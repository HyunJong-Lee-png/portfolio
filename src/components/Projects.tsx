import Line from "./Line";
import Project from "./Project";

type Project = {
  title: string;
  date: string;
  titleInfo: string;
  description: string[];
  skills: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "포트폴리오 웹사이트(Vite)",
    date: "2025.02 (개인 프로젝트)",
    titleInfo: "포트폴리오 웹사이트",
    description: ["framer-motion을 이용한 자연스러운 애니메이션 효과", "tailwind-css를 이용해 유틸리티 클래스와 손쉬운 반응형 디자인 제작"],
    skills: 'TypeScript, Vite, GitHub',
    link: "https://hyunjong-lee-png.github.io/portfolio/"
  },
  {
    title: "실시간 채팅서비스",
    date: "2024.09 (개인 프로젝트)",
    titleInfo: "Socket-IO를 이용한 실시간 채팅서비스 구현",
    description: ["서버와의 양방향 통신을 위한 소켓 라이브러리", "MongoDB orm인 mongoose를 이용한 데이터저장", "CSS-in-JS 방식의 styled-component를 활용한 번들링 최적화"],
    skills: "TypeScript, Mongoose, Socket-IO, Styled-Component, Vercel",
    link: "https://socket-io-kakao-talk.vercel.app"
  },
  {
    title: "오픈마켓",
    date: "2023.12 (개인 프로젝트)",
    titleInfo: "일반적인 쇼핑몰 사이트",
    description: ["redux툴킷을 사용해 보다 간편한 상태관리 라이브러리 구현", "react-hook-form을 사용한 손쉬운 유효성 검사와 폼구현", "passport 라이브러리를 통한 인증시스템 구현"],
    skills: "TypeScript, Redux, React-hook-form, Passport.js, Vercel",
    link: "https://open-market-redux.vercel.app"
  },
  {
    title: "영화 사이트",
    date: "2024.06 (개인 프로젝트)",
    titleInfo: "넷플릭스 사이트를 구현한 영화 사이트",
    description: ["framer-motion을 사용한 매끄러운 애니메이션 효과", "recoil을 사용한 간편한 상태관리", "reqct-query를 사용해 데이터 패칭과 로딩페이지의 손쉬운 구현"],
    skills: "JavaScript, framer-motion, react-query, recoil",
    link: "https://react-netflix-amber.vercel.app"
  },
  {
    title: "소셜 미디어 플랫폼",
    date: "2024.03 (개인 프로젝트)",
    titleInfo: "트위터처럼 메세지(트윗)를 작성하고 공유할 수 있는 사이트",
    description: ["직접 백엔드 설정없이 간편한 백엔드 구현(인증,DB저장,storage등)이 가능한 firebase사용", "react-hook-form을 사용한 손쉬운 유효성 검사와 폼구현"],
    skills: "TypeScript, Firebase, React-hook-form",
    link: "https://firebase-twitter-sigma.vercel.app"
  },
  {
    title: "챗봇 사이트",
    date: "2024.12 (개인 프로젝트)",
    titleInfo: "ai-sdk를 사용한 대화형 AI 사이트 ",
    description: ["최신 Next의 ServerAction을 사용해 서버측 작업을 쉽게 처리해 보안과 성능 향상", "drizzle-orm을 사용해 PostgreSQL DB와의 데이터 상호작용", "zod라이브러리를 통해 세밀한 유효성 검사", "커스터마이징이 가능한 shadcn-ui사용", "zustand를 사용해 손쉬운 상태관리 구현", "Neon을 사용해 PostgreSQL기반 서버리스 데이터베이스 구현"],
    skills: "TypeScript, Next, Neon, Zod, Zustand, PostgreSQL",
    link: "https://chatbot-next-lake.vercel.app"
  },

];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <Line content="Projects" />
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => <Project key={index}{...project} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;