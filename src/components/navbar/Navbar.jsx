import {Sidebar} from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from 'framer-motion'

export const Navbar = () => {
  return (
    <div className="navbar">
        {/*Sidebar*/}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0.5,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}>
                Rajat Lavekar
            </motion.span>
            <div className="social">
                <a href="https://www.facebook.com"><img src="/facebook.png" alt=""></img></a>
                <a href="https://www.twitter.com"><img src="/x_1.png" alt=""></img></a>
                <a href="https://www.instagram.com"><img src="/instagram.png" alt=""></img></a>
                <a href="https://www.linkedin.com"><img src="/linkedin.png"></img></a>
            </div>
        </div>
    </div>
  )
}
