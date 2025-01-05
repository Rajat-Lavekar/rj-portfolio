import { useRef } from "react";
import "./services.scss";
import {color, motion, useInView} from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    }
}


export const Services = () => {
  
    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"});
    
    return (
    <motion.div 
      className="services" 
      variants={variants} 
      initial="initial" 
    //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>
                I aspire to Learn and Contribute 
                <br />throughout my way forward   
            </p> <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people_3.jpg" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>Bold line</motion.b>Normal</h1>
                <button>WHAT DO I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div 
                className="box"
                whileHover={{
                    background: "lightgray",
                    color: "black",
                    scale: 1.02,
                }}
            >
                <h2>Title 1</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div 
                className="box"
                whileHover={{
                    background: "lightgray",
                    color: "black",
                    scale: 1.02,
                    }}
            >
                <h2>Title 2</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div 
                className="box"
                whileHover={{
                    background: "lightgray",
                    color: "black",
                    scale: 1.02,
                }}
            >
                <h2>Title 3</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div 
                className="box"
                whileHover={{
                    background: "lightgray",
                    color: "black",
                    scale: 1.02,
                }}
            >
                <h2>Title 4</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
