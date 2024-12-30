import "./contact.scss"
import {ref} from 'react';
import {animate, motion} from 'framer-motion';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    },
};


export const Contact = () => {
  return (
    <motion.div 
      className='contact'
      variants={variants}
      initial='initial'
      whileInView='animate'    
    >
        <motion.div 
          className="textContainer" 
          variants={variants}
          initial='initial'
          animate='animate'  
        >
            <h1>Let's work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>rajat.lavekar@gmail.com</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>+91 9610698187</span>
            </div>
        </motion.div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder="Name" />
                <input type="email" required placeholder="Email" />
                <textarea rows={8} placeholder='Message'></textarea>
                <button>Send</button>
            </form>
        </div>
    </motion.div>
  )
}
