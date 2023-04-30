'use client'

import { LayoutGroup, AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Item } from "./Item";
import List from "./List";


const FramerMotionDemo = () => {

    const [id, setId] = useState(null)
    const imageHasLoaded = true;
    const [test, setTest] = useState(0)


    useEffect(() => {
        document.addEventListener('keydown', e => {
            if (e.code == 'Escape') {
                setId(null)
            }
        })
    }, [])

    return (
        <div className="container">
            {id ? <>
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
            </> : null}
            <List selectedId={id} setId={setId} />


        </div>

    )
}

export default FramerMotionDemo