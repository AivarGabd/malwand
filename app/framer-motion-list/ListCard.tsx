import { motion, useMotionValue } from "framer-motion";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "./utils/use-scroll-constraints";
import { useWheelScroll } from "./utils/use-wheel-scroll";
import { useRef } from "react";

const ListCard = ({
    id,
    title,
    category
}: any) => {
    

    return (
        <>
            <div className="card-content-container" >
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                        
                    >
                        <img className="card-image" src={`/images/${id}.jpg`} alt="" />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default ListCard