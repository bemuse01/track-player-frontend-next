import { AnimatePresence, motion } from 'framer-motion'


const Placeholder = ({isLoading, color}) => {
    const placeholderClass = 'w-full h-full absolute'
    const placeholderStyle = {
        background: color
    }


    return(
        <AnimatePresence>
            
            {isLoading &&
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                    className={placeholderClass}
                    style={placeholderStyle}
                >
                </motion.div>
            }

        </AnimatePresence>
    )
}


export default Placeholder