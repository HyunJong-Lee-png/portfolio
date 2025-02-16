import { motion } from "framer-motion";
import Line from "./Line";

const divVar = {
  start: {
    scale: 1.2
  }
}

const anchorVar = {
  start: {
    textDecoration: "underline"
  }
}

const Repository: React.FC = () => {
  return (
    <section id="repository" className="py-20 bg-black text-white">
      <div className="w-[60%] mx-auto text-center">
        <Line content="Repository" />
        <motion.div
          className="bg-white mt-10 rounded-lg p-10 flex justify-center items-center text-black cursor-pointer"
          whileHover={'start'}
          variants={divVar}
          onClick={() => window.open("https://github.com/HyunJong-Lee-png")}
        >
          <div className="flex flex-col gap-5">
            <img src="./github.jpg" alt="image" />
            <motion.a
              href="https://github.com/HyunJong-Lee-png"
              target="_blank"
              variants={anchorVar}
            >github.com/HyunJong-Lee-png
            </motion.a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Repository;