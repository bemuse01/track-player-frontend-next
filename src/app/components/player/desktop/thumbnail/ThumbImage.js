// libs
import { AnimatePresence, motion } from 'framer-motion'

// store
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'

// components
import { ImageLoader } from '@/components/image'

// etc
import { DEFAULT_SPRING } from '@/config/easing'


const ThumbImage = () => {
    // store
    const thumbnailUrl = useDataStore(state => state.thumbnailUrl)
    const direction = usePlayerStore(state => state.direction)


    // image box
    const imageBoxClass = 'image-box w-full h-full relative'


    // image
    const imageAnimClass = 'image-anim w-full h-full absolute'
    const variants = {
        initial: {
            x: '15%',
            opacity: 0,
        },
        animate: {
            x: '0',
            opacity: 1,
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
        exit: {
            x: '-15%',
            opacity: 0,
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
    }
    

    return(
        <div
            className={imageBoxClass}
        >   

            <AnimatePresence>
            
                <motion.div
                    key={thumbnailUrl}
                    initial={direction === 1 ? 'initial' : 'exit'}
                    animate="animate"
                    exit={direction === 1 ? 'exit' : 'initial'}
                    variants={variants}
                    className={imageAnimClass}
                >
                    <ImageLoader url={thumbnailUrl} />
                </motion.div>

            </AnimatePresence>

        </div>
    )
}


export default ThumbImage