import { motion, useAnimation, useScroll } from "framer-motion";
import { ArrowUpToLine } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function ArrowUp() {
  const arrowAnimation = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on('change', () => {
      if (scrollY.get() > 80) {
        arrowAnimation.start({
          scale: 1,
          transition: {
            duration: 0.5
          },
        })
      } else {
        arrowAnimation.start({
          scale: 0,
          transition: {
            duration: 0.5
          },
        })
      }
    })
  }, [])

  return (
    <motion.div
      className="bg-black w-10 h-10 fixed bottom-10 right-14 cursor-pointer rounded-md p-2"
      initial={{ scale: 0 }}
      animate={arrowAnimation}>
      <Link to="hero" smooth={true} duration={500} >
        <ArrowUpToLine className="w-full h-full text-white" />
      </Link>
    </motion.div>

  );
}