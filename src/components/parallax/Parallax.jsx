import "./parallax.scss"
// import {motion} from "framer-motion"

export const Parallax = ({type}) => {
  return (
    <div 
        className="parallax" 
        style={{
            background:
              type === "services" 
                ? "linear-gradient(180deg, #111132, #0c0c1d)"  // On services slide
                : "linear-gradient(180deg, #111132, #505064)", // On acheivements slide
        }}
    >
        <h1>{type==="services" ? "What Do I Do?" : "What I have done?"}</h1>
        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}
