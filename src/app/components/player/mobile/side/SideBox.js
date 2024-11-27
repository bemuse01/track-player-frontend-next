// libs
import { cubicBezier, motion } from 'framer-motion'
import { useState } from 'react'

// store
import useStateStore from '@/store/stateStore'

// hooks
import useItems from '@/hooks/useItems'
import useUpdate from '@/hooks/useUpdate'

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
    const sideBoxClass = 'side-box w-full flex-1 relative'


    // 
    const sideClass = 'w-full h-full absolute overflow-hidden flex flex-col'


    // scroll items
    const items = useItems()


    return(
        <div
            className={sideBoxClass}
        >

            <div
                className={sideClass}
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

            </div>

        </div>
    )
}


export default SideBox