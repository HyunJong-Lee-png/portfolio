import Line from "./Line";
import Project, { ProjectData } from "./Project";

const projects: ProjectData[] = [
  {
    title: "챗봇 사이트",
    date: "2024.12 (개인 프로젝트)",
    titleInfo: "Next.js와 AI SDK를 활용한 대화형 AI 서비스",
    background:
      "AI 응답 기능을 단순히 화면에 출력하는 것을 넘어, 서버 처리, 데이터베이스 연동, 상태관리까지 포함한 풀스택 구조를 학습하기 위해 진행한 프로젝트입니다.",
    role:
      "프론트엔드 화면 구성, Server Action 처리, 데이터베이스 연동, 상태관리, 유효성 검사 구현을 담당했습니다.",
    frontend: [
      "대화형 챗봇 UI 구현",
      "shadcn/ui를 활용한 재사용 가능한 UI 컴포넌트 구성",
      "Zustand를 활용한 클라이언트 상태관리 구현",
    ],
    backend: [
      "Next.js Server Action을 활용한 서버 측 로직 처리",
      "Drizzle ORM을 활용한 PostgreSQL 데이터베이스 연동",
      "Zod를 활용한 요청 데이터 유효성 검사",
      "Neon을 활용한 서버리스 PostgreSQL 데이터베이스 구성",
    ],
    results: [
      "프론트엔드, 서버 로직, 데이터베이스가 연결되는 전체 서비스 흐름 구현",
      "Server Action 기반 서버 처리 방식에 대한 이해도 향상",
      "ORM과 스키마 검증을 활용한 안정적인 데이터 처리 경험 확보",
    ],
    jobFit: [
      "Next.js 기반 풀스택 개발 경험",
      "서버 로직과 DB 연동을 포함한 서비스 구현 경험",
      "TypeScript 기반 타입 안정성과 유효성 검사를 고려한 개발 경험",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "AI SDK",
      "Server Action",
      "Drizzle ORM",
      "PostgreSQL",
      "Neon",
      "Zod",
      "Zustand",
    ],
    link: "https://chatbot-next-lake.vercel.app",
  },
  {
    title: "실시간 채팅서비스",
    date: "2024.09 (개인 프로젝트)",
    titleInfo: "Socket.IO를 이용한 실시간 채팅 서비스",
    background:
      "실시간 양방향 통신 구조를 직접 구현하고, 클라이언트와 서버 간 이벤트 흐름을 이해하기 위해 진행한 프로젝트입니다.",
    role:
      "채팅 UI 구현, Socket.IO 이벤트 처리, Node.js 서버 구성, MongoDB 데이터 저장 구조 설계를 담당했습니다.",
    frontend: [
      "채팅방 UI 및 메시지 입력/출력 컴포넌트 구현",
      "Socket.IO 클라이언트를 활용한 실시간 메시지 수신 처리",
      "styled-components를 활용한 컴포넌트 단위 스타일링 적용",
    ],
    backend: [
      "Node.js 기반 Socket.IO 서버 구성",
      "클라이언트 접속, 메시지 전송, 수신 이벤트 처리",
      "Mongoose를 활용한 MongoDB 데이터 저장 구조 구현",
    ],
    results: [
      "실시간 메시지 송수신 기능 구현",
      "프론트엔드 상태와 서버 이벤트를 동기화하는 흐름 학습",
      "MongoDB와 Mongoose를 활용한 데이터 저장 경험 확보",
    ],
    jobFit: [
      "Node.js 기반 백엔드 서버 구현 경험",
      "Socket.IO를 활용한 실시간 서비스 개발 경험",
      "프론트엔드와 백엔드 흐름을 함께 설계한 풀스택 경험",
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Mongoose",
      "styled-components",
      "Vercel",
    ],
    link: "https://socket-io-kakao-talk.vercel.app",
  },
  {
    title: "오픈마켓",
    date: "2023.12 (개인 프로젝트)",
    titleInfo: "상품 조회와 인증 기능을 포함한 쇼핑몰 사이트",
    background:
      "쇼핑몰 서비스에서 자주 사용되는 상품 목록, 폼 처리, 인증 흐름, 상태관리 구조를 학습하기 위해 진행한 프로젝트입니다.",
    role:
      "상품 UI 구성, 전역 상태관리, 폼 유효성 검사, 인증 기능 구현을 담당했습니다.",
    frontend: [
      "상품 목록 및 상세 화면 UI 구현",
      "Redux Toolkit을 활용한 전역 상태관리 구현",
      "React Hook Form을 활용한 입력 폼과 유효성 검사 처리",
    ],
    backend: [
      "Passport.js를 활용한 인증 흐름 구현",
      "로그인 상태에 따른 사용자 접근 흐름 처리",
    ],
    results: [
      "쇼핑몰 서비스의 기본적인 화면 흐름과 상태관리 구조 구현",
      "폼 입력값 검증과 인증 처리 흐름 학습",
      "전역 상태관리 라이브러리를 활용한 데이터 관리 경험 확보",
    ],
    jobFit: [
      "커머스 서비스에서 사용되는 기본 UI와 상태관리 경험",
      "인증 기능이 포함된 웹 서비스 구현 경험",
      "프론트엔드와 인증 로직의 연결 흐름 이해",
    ],
    skills: [
      "TypeScript",
      "Redux Toolkit",
      "React Hook Form",
      "Passport.js",
      "Vercel",
    ],
    link: "https://open-market-redux.vercel.app",
  },
  {
    title: "소셜 미디어 플랫폼",
    date: "2024.03 (개인 프로젝트)",
    titleInfo: "트위터 형태의 게시글 작성 및 공유 서비스",
    background:
      "사용자 인증, 게시글 작성, 데이터 저장, 파일 저장 등 소셜 미디어 서비스의 기본 구조를 학습하기 위해 진행한 프로젝트입니다.",
    role:
      "게시글 작성 UI, 인증 처리, Firebase 기반 데이터 저장 및 스토리지 연동을 담당했습니다.",
    frontend: [
      "게시글 작성 및 출력 UI 구현",
      "React Hook Form을 활용한 입력값 처리",
      "사용자 상태에 따른 화면 렌더링 처리",
    ],
    backend: [
      "Firebase Authentication을 활용한 사용자 인증 구현",
      "Firestore를 활용한 게시글 데이터 저장",
      "Firebase Storage를 활용한 파일 저장 기능 구현",
    ],
    results: [
      "별도 서버 구축 없이 BaaS 기반 백엔드 기능 구현",
      "인증, DB 저장, 스토리지를 포함한 서비스 흐름 경험",
      "소셜 미디어 서비스의 기본 CRUD 흐름 이해",
    ],
    jobFit: [
      "Firebase 기반 백엔드 기능 활용 경험",
      "사용자 인증과 데이터 저장이 포함된 서비스 구현 경험",
      "프론트엔드와 클라우드 백엔드 연동 경험",
    ],
    skills: ["TypeScript", "Firebase", "Firestore", "Firebase Storage", "React Hook Form"],
    link: "https://firebase-twitter-sigma.vercel.app",
  },
  {
    title: "영화 사이트",
    date: "2024.06 (개인 프로젝트)",
    titleInfo: "넷플릭스 UI를 참고한 영화 정보 사이트",
    background:
      "외부 API 데이터를 받아 화면에 렌더링하고, 사용자 경험을 고려한 애니메이션과 상태관리 방식을 학습하기 위해 진행한 프로젝트입니다.",
    role:
      "영화 목록 UI 구현, 데이터 패칭, 로딩 상태 처리, 애니메이션 효과 구현을 담당했습니다.",
    frontend: [
      "영화 목록 및 상세 UI 구현",
      "React Query를 활용한 서버 데이터 패칭과 로딩 상태 처리",
      "Framer Motion을 활용한 화면 전환 애니메이션 구현",
      "Recoil을 활용한 클라이언트 상태관리 구현",
    ],
    results: [
      "외부 API 데이터를 활용한 화면 렌더링 경험 확보",
      "서버 상태와 클라이언트 상태의 차이 이해",
      "애니메이션을 활용한 사용자 경험 개선 경험",
    ],
    jobFit: [
      "API 연동 기반 프론트엔드 개발 경험",
      "React Query를 활용한 비동기 데이터 관리 경험",
      "사용자 경험을 고려한 UI 인터랙션 구현 경험",
    ],
    skills: ["JavaScript", "React", "React Query", "Recoil", "Framer Motion"],
    link: "https://react-netflix-amber.vercel.app",
  },
  {
    title: "포트폴리오 웹사이트(Vite)",
    date: "2025.02 (개인 프로젝트)",
    titleInfo: "개인 프로젝트와 기술 스택을 소개하는 포트폴리오 웹사이트",
    background:
      "개인 프로젝트 경험과 기술 역량을 한눈에 확인할 수 있도록 정리하기 위해 제작한 웹사이트입니다.",
    role:
      "전체 화면 구성, 컴포넌트 설계, 반응형 스타일링, GitHub Pages 배포를 담당했습니다.",
    frontend: [
      "Vite 기반 React 프로젝트 환경 구성",
      "Tailwind CSS를 활용한 반응형 레이아웃 구현",
      "Framer Motion을 활용한 자연스러운 애니메이션 효과 적용",
      "프로젝트 데이터를 배열로 관리하고 컴포넌트에 props로 전달하는 구조 구현",
    ],
    results: [
      "프로젝트, 기술 스택, 연락처 정보를 섹션별로 구조화",
      "컴포넌트 재사용을 통해 유지보수하기 쉬운 구조로 개선",
      "GitHub Pages를 활용한 정적 웹사이트 배포 경험 확보",
    ],
    jobFit: [
      "React 컴포넌트 기반 UI 설계 경험",
      "TypeScript를 활용한 props 타입 정의 경험",
      "사용자에게 정보를 명확하게 전달하는 포트폴리오 구성 경험",
    ],
    skills: ["TypeScript", "React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    link: "https://hyunjong-lee-png.github.io/portfolio/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <Line content="Projects" />

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;