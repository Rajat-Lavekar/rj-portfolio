import {motion} from 'framer-motion'


const Test = () => {
  return (
    <div className='course'>
        <motion.div className="box" 
        initial={{opacity:0.2, scale:1}}
        transition={{duration:0.5}}
        whileHover={{opacity: 0.5, scale:1.1}}
        ></motion.div>
    </div>
  )
}

export default Test