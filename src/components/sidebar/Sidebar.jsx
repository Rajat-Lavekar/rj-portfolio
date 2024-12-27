import {useState} from "react"
import {motion} from "framer-motion"
import "./sidebar.scss"
import { ToggleButton } from "./toggleButton/ToggleButton"
import { Links } from "./links/Links"



export const Sidebar = () => {
  
    const [open, setOpen] = useState(false);
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transiton: {
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 40,
            },
        },
    };
    return (
    <motion.div className="sidebar" 
    animate={open ? "open" : "closed"}>
        <motion.div className="bg">
            <Links/>    
        </motion.div>  
        <ToggleButton/>  
    </motion.div>
  )
}