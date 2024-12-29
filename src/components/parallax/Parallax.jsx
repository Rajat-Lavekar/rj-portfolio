import "./parallax.scss"
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion"

export const Parallax = ({type}) => {
  
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yTxt = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

    return (
    <motion.div 
        className="parallax"
        ref={ref} 
        style={{
            background:
              type === "services" 
                ? "linear-gradient(180deg, #111132, #0c0c1d)"  // On services slide
                : "linear-gradient(180deg, #111132, #505064)", // On acheivements slide
        }}
    >
        <motion.h1 style={{y: yTxt}}>
            {type==="services" ? "What Do I Do?" : "What have I worked on?"}
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div 
            className="planets" 
            style={{
                y: yBg,
                backgroundImage: `url(${
                type === "services" ? "/planets.png" : "/sun.png"
                })`,
            }}>
        </motion.div>
        <motion.div style={{x: yBg}} className="stars"></motion.div>
    </motion.div>
  )
}
