import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navVar = {
  start: {
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#6b7280'
  },
  end: {
    backgroundColor: 'rgba(0,0,0,1)',
    color: 'rgba(255,255,255,1)'
  }
}

const Navbar: React.FC = () => {
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    scrollY.on('change', () => {
      if (scrollY.get() > 80) {
        setIsScrolled(true);
        navAnimation.start("end");
      } else {
        setIsScrolled(false);
        navAnimation.start("start");
      }
    })
  }, [])

  return (
    <motion.nav
      initial={{ color: '#6b7280' }}
      variants={navVar}
      animate={navAnimation}
      className="fixed top-0 left-0 w-full shadow-md py-4 z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            HyunJong's Portfolio
          </Link>
        </h1>
        <div className="space-x-4">
          {["about", "skills", "repository", "projects", "contact"].map(item =>
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className={`cursor-pointer px-3 py-2 transition-all duration-600 ${isScrolled
                ? "text-white hover:text-red-500"
                : "text-gray-500 hover:text-blue-500"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;