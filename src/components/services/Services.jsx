import "./services.scss";
import {motion} from "framer-motion"

export const Services = () => {
  return (
    <div className="services">
        <motion.div className="textContainer">
            <p>
                I aspire to Learn and Contribute 
                <br />throughout my way forward   
            </p> <hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><b>Unique</b> Ideas</h1>
            </div>
            <div className="title">
                <h1><b>Bold line</b>Normal</h1>
                <button>WHAT DO I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
                <h2>Title 1</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Title 2</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Title 3</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Title 4</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <button>Go</button>
            </div>
        </motion.div>
    </div>
  )
}
