// libs
import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// components
import VolumeButton from '@/components/controlButton/VolumeButton'
import VolumeBar from './VolumeBar'


const VolumeArea = ({scale, color}) => {
    const volumeButtonClass = 'volume-area w-full h-full flex flex-row-reverse'

    const volumeAnimClass = 'w-full h-full relative'
    const [isButtonHover, setIsButtonHover] = useState(false)
    const [isBarHover, setIsBarHover] = useState(false)
    const [isHoldingBar, setIsHoldingBar] = useState(false)
    const isHover = useMemo(() => isBarHover || isButtonHover || isHoldingBar, [isBarHover, isButtonHover, isHoldingBar])

    const animVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
        transition: {
            duration: 0.3,
        }
    }
    const onButtonMouseenter = () => {
        setIsButtonHover(true)
    }
    const onButtonMouseleave = () => {
        setIsButtonHover(false)
    }
    const onBarMouseenter = () => {
        setIsBarHover(true)
    }
    const onBarMouseleave = () => {
        setIsBarHover(false)
    }

    return(
        <div
            className={volumeButtonClass}
        >
        
            <VolumeButton scale={scale} color={color} mouseenter={onButtonMouseenter} mouseleave={onButtonMouseleave} />

            <AnimatePresence>

                {isHover &&
                    <motion.div
                        className={volumeAnimClass}
                        onMouseEnter={onBarMouseenter}
                        onMouseLeave={onBarMouseleave}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={animVariants}
                    >
                        <VolumeBar color={color} setIsHoldingBar={setIsHoldingBar}/>
                    </motion.div>
                }

            </AnimatePresence>

        </div>
    )
}


export default VolumeArea