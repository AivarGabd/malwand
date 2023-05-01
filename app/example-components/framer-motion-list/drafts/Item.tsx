'use client'

import { items } from "../data";
import { motion, useMotionValue } from "framer-motion";
import { useWheelScroll } from "../utils/use-wheel-scroll";
import { useEffect, useRef, useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";

const dismissDistance = 150;

interface Constraints {
  top: number;
  bottom: number;
}


export function Item({ id, setId }: any) {
  const { category, title }: any = items.find(item => item.id === id);
  const y = useMotionValue(0);
  const zIndex = useMotionValue(2);


  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    bottom: 0
  });

  useEffect(() => {
    //const element = ref.current;
    //const viewportHeight = window.innerHeight;
    //const contentTop = element.offsetTop;
    //const contentHeight = element.offsetHeight;
    //const scrollableViewport = viewportHeight - contentTop * 2;
    //const top = Math.min(scrollableViewport - contentHeight, 0);
    //setConstraints({ top, bottom: 0 });
  }, []);



  const containerRef = useRef(null);

  return (
    <>
      <div ref={containerRef}>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          style={{ pointerEvents: "auto" }}
          className="overlay"
          onClick={() => {
            setId(null)
          }}
        >
        </motion.div>


        <div
          className="card-content-container open">
          <motion.div
            className="card-content"
            layoutId={`card-container-${id}`}

          >
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <img className="card-image" src={`images/${id}.jpg`} alt="" />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <span className="category">{category}</span>
              <h2>{title}</h2>
            </motion.div>
            <motion.div className="content-container">
              <LoremIpsum
                p={6}
                avgWordsPerSentence={6}
                avgSentencesPerParagraph={4}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}