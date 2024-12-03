// libs
import { motion, AnimatePresence, cubicBezier } from 'framer-motion'

// store
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'

// components
import VinylImage from './VinylImage'

// etc
import { DEFAULT_SPRING, easeOutCirc } from '@/config/easing'


const VinylWrapper = () => {
    // store
    const thumbnailUrl = useDataStore(state => state.thumbnailUrl)
    const isPlaying = usePlayerStore(state => state.isPlaying)


    // vinyl wrapper
    const vinylWrapperClass = 'vinyl-wrapper w-full h-full'


    // vinyl anim
    const vinylAnimClass = 'vinyl-anim w-full h-full flex justify-center items-center'
    const variants = {
        initial: {
            opacity: 0,
            x: '0'
        },
        animate: {
            opacity: 1,
            x: '50%',
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
        exit: {
            opacity: 0,
            x: '0',
            transition: {
                ease: cubicBezier(...easeOutCirc),
                duration: 0.3
            }
        }
    }


    // vinyl image
    const w = '90%'
    const h = '90%'
    

    return(
        <div
            className={vinylWrapperClass}
        >
            <AnimatePresence>

                {isPlaying &&
                    <motion.div
                        className={vinylAnimClass}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={variants}
                    >

                        <VinylImage 
                            url={thumbnailUrl} 
                            w={w} 
                            h={h} 
                        />

                    </motion.div>
                }

            </AnimatePresence>

        </div>
    )
}


export default VinylWrapper