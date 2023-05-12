

import { motion, useDomEvent, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { memo, useRef } from "react";
import LoremIpsum from "react-lorem-ipsum";

const ListCard =
    ({
        id,
        title,
        category,
        isSelected,
        setId
    }: any) => {


        return (
            <>
                <li className={`relative h-[460px] flex-[0_0_40%] max-w-[40%] p-[25px]`}
                    onClick={() => {
                        setId(id)
                    }}
                >
                    <div className={`w-full h-full block pointer-events-none ${isSelected && "z-[1] fixed inset-x-0 inset-y-0"}`} >
                        <motion.div
                            className={`pointer-events-auto relative overflow-hidden w-full h-full mx-auto my-0 rounded-[20px] bg-neutral-300 ${isSelected && 'h-auto max-w-[700px] overflow-hidden pointer-events-none;'}`}
                            layoutId={`card-container-${id}`}
                            layout
                            transition={{
                                stiffness: 300,
                                damping: 35
                            }}
                        >
                            <motion.div
                                className="absolute overflow-hidden h-[420px] w-screen left-0 top-0;"
                                layoutId={`card-image-container-${id}`}
                            >
                                <img src={`images/${id}.jpg`} alt="" />
                            </motion.div>
                            <motion.div
                                className="absolute max-w-[300px] left-[15px] top-[15px];"
                                layoutId={`title-container-${id}`}
                            >
                                <span>{category}</span>
                                <span>{title}</span>
                            </motion.div>
                            <motion.div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae. Gravida dictum fusce ut placerat. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Ut consequat semper viverra nam libero. In fermentum et sollicitudin ac orci phasellus egestas tellus. Risus nullam eget felis eget nunc lobortis. Faucibus a pellentesque sit amet porttitor eget dolor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Aliquam sem et tortor consequat id porta nibh. Leo urna molestie at elementum.
                                Quisque id diam vel quam elementum pulvinar etiam non quam. Lobortis mattis aliquam faucibus purus in. Nullam eget felis eget nunc lobortis mattis aliquam. Blandit aliquam etiam erat velit scelerisque in dictum non. Velit scelerisque in dictum non. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. In fermentum et sollicitudin ac orci. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Ut etiam sit amet nisl purus. Nec ullamcorper sit amet risus. Quis enim lobortis scelerisque fermentum dui faucibus. Risus sed vulputate odio ut enim blandit volutpat. Et tortor at risus viverra adipiscing at in tellus integer. Fermentum posuere urna nec tincidunt praesent semper. Id porta nibh venenatis cras sed. Dictum at tempor commodo ullamcorper. Est lorem ipsum dolor sit amet consectetur adipiscing.
                                Fermentum dui faucibus in ornare quam viverra orci sagittis. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Cras ornare arcu dui vivamus arcu. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Massa massa ultricies mi quis hendrerit. Ultrices sagittis orci a scelerisque purus semper eget duis. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Tincidunt vitae semper quis lectus nulla at. Purus sit amet luctus venenatis. Turpis massa tincidunt dui ut ornare lectus sit. Egestas quis ipsum suspendisse ultrices. Eu sem integer vitae justo eget magna fermentum.
                                Dui nunc mattis enim ut tellus elementum sagittis vitae et. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Proin sed libero enim sed faucibus turpis in eu. Sit amet consectetur adipiscing elit duis. Sagittis eu volutpat odio facilisis. Id volutpat lacus laoreet non curabitur gravida arcu. Odio tempor orci dapibus ultrices in iaculis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vel quam elementum pulvinar etiam. Orci eu lobortis elementum nibh tellus molestie nunc. Mauris nunc congue nisi vitae suscipit tellus mauris. Hac habitasse platea dictumst quisque.
                                Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Dolor sed viverra ipsum nunc aliquet bibendum enim. Dignissim sodales ut eu sem integer. Et leo duis ut diam quam nulla porttitor. Nam libero justo laoreet sit amet cursus sit amet dictum. Tristique senectus et netus et malesuada fames ac turpis egestas. Eu mi bibendum neque egestas congue quisque egestas. Sed risus pretium quam vulputate dignissim suspendisse in. At augue eget arcu dictum. Neque volutpat ac tincidunt vitae semper quis. Mi quis hendrerit dolor magna eget est lorem ipsum. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ultrices tincidunt arcu non sodales neque sodales. Venenatis urna cursus eget nunc scelerisque viverra mauris in.
                            </motion.div>
                        </motion.div>
                    </div>
                </li>
            </>
        )
    }

export default ListCard