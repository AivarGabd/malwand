'use client'

import { LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Item } from "./Item";
import List from "./List";


const FramerMotionDemo = () => {

    const [id, setId] = useState(null)
    const imageHasLoaded = true;


    const [test, setTest] = useState(0)

    return (
        <div className="container">

       {/**
        *      <button onClick={() => {
                setTest(test + 1)
            }}>
                Test
            </button>

        */}
            
            <LayoutGroup>
                <List selectedId={id} setId={setId} />
                <AnimatePresence>
                    {id && imageHasLoaded && <Item id={id} key="item" setId={setId} />}
                </AnimatePresence>
            </LayoutGroup>
        </div>

    )
}

export default FramerMotionDemo