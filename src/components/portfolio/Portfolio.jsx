import "./portfolio.scss";
import {useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
{    
    id: 1,
    title:"Portfolio 1",
    img:"https://images.pexels.com/photos/29905617/pexels-photo-29905617/free-photo-of-black-and-white-hands-handling-coins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:"Lorem epsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Sed nec eros sed urna euismod ultricies. Donec in neque in metus cursus aliquet. Cras auctor semper libero, sit amet iaculis ligula. Ut nec nunc quis nunc posuere vestibulum. Nulla sit amet sollicitudin est. Cras vel justo ut turpis luctus condimentum."
},
{    
    id: 2,
    title:"File Sharing App",
    img:"https://cdn.dribbble.com/users/1822211/screenshots/6248897/artboard_4x.jpg?resize=1000x750&vertical=center",
    desc:"Lorem epsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Sed nec eros sed urna euismod ultricies. Donec in neque in metus cursus aliquet. Cras auctor semper libero, sit amet iaculis ligula. Ut nec nunc quis nunc posuere vestibulum. Nulla sit amet sollicitudin est. Cras vel justo ut turpis luctus condimentum."
},
{    
    id: 3,
    title:"Topic Modelling by LDA",
    img:"https://i.pinimg.com/736x/c1/24/71/c124712814cd8efebe847b7caafc5523.jpg",
    desc:"Lorem epsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Sed nec eros sed urna euismod ultricies. Donec in neque in metus cursus aliquet. Cras auctor semper libero, sit amet iaculis ligula. Ut nec nunc quis nunc posuere vestibulum. Nulla sit amet sollicitudin est. Cras vel justo ut turpis luctus condimentum."
},
{    
    id: 4,
    title:"Hospital Management System",
    img:"https://i.pinimg.com/736x/93/18/20/93182039183c8ca75bc2d6506358f71b.jpg",
    desc:"Lorem epsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Sed nec eros sed urna euismod ultricies. Donec in neque in metus cursus aliquet. Cras auctor semper libero, sit amet iaculis ligula. Ut nec nunc quis nunc posuere vestibulum. Nulla sit amet sollicitudin est. Cras vel justo ut turpis luctus condimentum."
},
];

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />   
                    </div>
                    
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Source Code</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export const Portfolio = () => {
  
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 50,
    });

    return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX: scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}
