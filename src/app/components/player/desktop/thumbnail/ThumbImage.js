// libs
import { AnimatePresence, motion } from 'framer-motion'

// store
import usePlayerStore from '@/store/playerStore'

// hook
import useUrl from '@/hooks/useUrl'
import useMainData from '@/hooks/useMainData'

// components
import ImageComp from '@/components/image/ImageComp'

// etc
import { DEFAULT_SPRING } from '@/config/easing'


const ThumbImage = () => {
    // store
    const {tracks, idx} = useMainData()
    const direction = usePlayerStore(state => state.direction)


    // hooks
    const {url} = useUrl({tracks, idx})


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
                    key={url}
                    initial={direction === 1 ? 'initial' : 'exit'}
                    animate="animate"
                    exit={direction === 1 ? 'exit' : 'initial'}
                    variants={variants}
                    className={imageAnimClass}
                >
                    <ImageComp url={url} />
                </motion.div>

            </AnimatePresence>

        </div>
    )
}


export default ThumbImage