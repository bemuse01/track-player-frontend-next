// libs
import { motion, AnimatePresence } from 'framer-motion'

// store
import usePlayerStore from '@/store/playerStore'

// hooks
import useUrl from '@/hooks/useUrl'
import useMainData from '@/hooks/useMainData'
import useColor from '@/hooks/useColor'

// components
import VinylImage from './VinylImage'

// etc
import { DEFAULT_SPRING_2 } from '@/config/easing'


const VinylWrapper = () => {
    // store
    const {tracks, idx} = useMainData()
    const direction = usePlayerStore(state => state.direction)
    const {color} = useColor({tracks, idx})
    const {url} = useUrl({tracks, idx})


    // vinyl wrapper
    const vinylWrapperClass = 'vinyl-wrapper aspect-square h-full'


    // 
    const vinylClass = 'w-full h-full translate-y-[-50%] scale-[1.9]'


    // vinyl anim
    const vinylAnimClass = 'vinyl-anim w-full h-full flex items-center justify-center absolute'
    const variants = {
        initial: {
            rotate: 120,
            transition: {
                rotate: {...DEFAULT_SPRING_2},
            }
        },
        animate: {
            rotate: 0,
            transition: {
                rotate: {...DEFAULT_SPRING_2},
            }
        },
        exit: {
            rotate: -120,
            transition: {
                rotate: {...DEFAULT_SPRING_2},
            }
        }
    }


    // vinyl image
    const w = '100%'
    const h = '100%'
    

    return(
        <div
            className={vinylWrapperClass}
        >

            <div
                className={vinylClass}
            >
                
                <AnimatePresence>

                    <motion.div
                        key={url}
                        className={vinylAnimClass}
                        initial={direction === 1 ? 'initial' : 'exit'}
                        animate="animate"
                        exit={direction === 1 ? 'exit' : 'initial'}
                        variants={variants}
                    >

                        <VinylImage 
                            url={url}
                            w={w} 
                            h={h} 
                            color={color} 
                        />

                    </motion.div>

                </AnimatePresence>

            </div>

        </div>
    )
}


export default VinylWrapper