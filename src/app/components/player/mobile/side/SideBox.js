// libs

// store
import useStateStore from '@/store/stateStore'

// hooks
import useItems from '@/hooks/useItems'

// components
import ScrollBox from './ScrollBox'
import SideHeader from './SideHeader'

// etc
import useMainData from '@/hooks/useMainData'
import useColor from '@/hooks/useColor'


const SideBox = () => {
    // store
    const {tracks, idx, currentPlaylistId} = useMainData()
    const {color} = useColor({tracks, idx})
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