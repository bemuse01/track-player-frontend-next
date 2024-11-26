import LoadingWrap from './LoadingWrap'
import { AnimatePresence, motion } from 'framer-motion'


const LoadingContainer = ({isLoading, size, delay}) => {
    // loading container
    const color = '#ffffff'
    const loadContClass = 'loading-container w-full h-full absolute'
    const loadContStyle = {
        background: color
    }
    const variants = {
        initial: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: delay || 0
            }
        }
    }


    return(
        <AnimatePresence>

            {isLoading && (
                <motion.div
                    className={loadContClass}
                    style={loadContStyle}
                    initial="initial"
                    exit="hidden"
                    variants={variants}
                >

                    <LoadingWrap size={size} />

                </motion.div>
            )}

        </AnimatePresence>
    )
}


export default LoadingContainer