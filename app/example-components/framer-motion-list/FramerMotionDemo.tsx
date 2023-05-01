'use client'

import { LayoutGroup, AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Item } from "./drafts/Item";
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
        <div className="max-w-[1200px] flex-[1_1_100%] px-[25px] py-[45px];">
            {id ? <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    style={{ pointerEvents: "auto" }}
                    className="z-[1] fixed will-change-[opacity] w-full inset-y-0 bg-zinc-800/[.8]"
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