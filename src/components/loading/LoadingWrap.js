import { motion, cubicBezier } from 'framer-motion'
import { easeInOutQuint } from '@/config/easing'

const LoadingWrap = ({size = 14}) => {
    // loading wrap 
    const loadWrapClass = 'loading-wrap w-full h-full flex justify-center items-center'


    // loading box
    const loadBoxClass = 'loading-bo w-[200px] max-lg:w-[180px] max-md:w-[160px] aspect-square'


    // loading parent
    const loadParentClass = 'loading-parent w-full h-full relative overflow-hidden'


    // loading childs
    const loadChildCount = 6
    const color = 50
    const loadChilds = Array.from({length: loadChildCount}, (_, i) => {

        const len = loadChildCount - 1
        const opacity = 1 - (0.8 / len) * i

        const key = i
        const childClass = 'loading-child w-full h-full absolute flex justify-center items-center'
        const elClass = 'loading-child-el absolute rounded-full'
        const style = {
            width: `${size}px`,
            height: `${size}px`,
            top: '0',
            background: `rgba(${color}, ${color}, ${color}, ${opacity})`,
        }

        return {key, childClass, elClass, style}
    })
    const variants = {
        hidden: {
            transform: `rotate(0deg)`,
        },
        visible: i => ({
            transform: `rotate(360deg)`,
            transition: {
                delay: 0.05 * i,
                duration: 2,
                repeat: Infinity,
                ease: cubicBezier(...easeInOutQuint)
            }
        }),
    }
    const loadChildsComp = loadChilds.map(child =>
        <motion.div 
            key={child.key}
            className={child.childClass}
            custom={child.key}
            initial='hidden'
            animate='visible'
            variants={variants}
        >
            <span
                className={child.elClass}
                style={child.style}
            >
            </span>
        </motion.div>
    )


    return(
        <div
            className={loadWrapClass}
        >

            <div 
                className={loadBoxClass}
            >

                <div 
                    className={loadParentClass}
                >

                    {loadChildsComp}

                </div>

            </div>

        </div>
    )
}

export default LoadingWrap