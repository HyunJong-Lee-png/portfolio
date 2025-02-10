import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero"
      className="h-[80vh] flex flex-col justify-center items-center text-center relative text-white bg-custom-image bg-cover bg-center bg-no-repeat opacity-80">
      <motion.h1
        className="text-5xl font-bold relative 
        before:content-[''] before:block before:w-20 before:h-[5px] before:bg-red-500 before:absolute before:-bottom-7 before:left-1/2 before:-translate-x-1/2 before:rounded-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        프론트엔드 개발자 포트폴리오
      </motion.h1>
      <p className="text-xl mt-10 relative">안녕하세요. <br></br>프론트엔드 개발자를 꿈꾸는 <span className="text-4xl">"이현종"</span>입니다.</p>
    </section>
  );
};

export default Hero;