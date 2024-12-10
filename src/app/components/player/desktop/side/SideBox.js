// libs
import { cubicBezier, motion } from 'framer-motion'

// store
import useStateStore from '@/store/stateStore'

// hooks
import useItems from '@/hooks/useItems'

// components
import ScrollBox from './ScrollBox'
import SideHeader from './SideHeader'

// etc
import { PLAYER_BORDER_VALUE } from '@/config/style'
import { DEFAULT_SPRING, easeOutCirc } from '@/config/easing'
import useMainData from '@/hooks/useMainData'
import useColor from '@/hooks/useColor'


const SideBox = () => {
    // store
    const {tracks, idx, currentPlaylistId} = useMainData()
    const {color} = useColor({tracks, idx})
    const isListOpen = useStateStore(state => state.isListOpen)
    const selectedListMenu = useStateStore(state => state.selectedListMenu)


    // side box
    const sideBoxClass = 'side-box w-full h-full absolute'


    // side anim
    const sideAnimClass = 'side-anim w-full h-full bg-white translate-x-[-50%] absolute overflow-hidden flex flex-col'
    const sideAnimStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }
    const variants = {
        initial: {
            x: '0',
            opacity: 0
        },
        animate: {
            x: '-50%',
            opacity: 1,
            transition: {
                x: {...DEFAULT_SPRING},
                opacity: {
                    duration: 0.3
                }
            }
        },
        exit: {
            x: '0',
            opacity: 0,
            transition: {
                ease: cubicBezier(...easeOutCirc),
                duration: 0.3
            }
        }
    }


    // scroll items
    const items = useItems()


    return(
        <div
            className={sideBoxClass}
        >

            <motion.div
                className={sideAnimClass}
                style={sideAnimStyle}
                initial="initial"
                animate={isListOpen ? "animate" : "exit"}
                variants={variants}
            >

                <SideHeader 
                    color={color}
                    selectedListMenu={selectedListMenu}
                />

                <ScrollBox
                    items={items} 
                    color={color} 
                    idx={idx} 
                    currentPlaylistId={currentPlaylistId} 
                    selectedListMenu={selectedListMenu} 
                />

            </motion.div>

        </div>
    )
}


export default SideBox