import { useEffect } from 'react'
import { PLAYER_BORDER_VALUE } from '@/config/style'
import ItemSwitcher from './ItemSwitcher'
import useScrollFetch from '@/hooks/useScrollFetch'


const ScrollBox = ({items, color, idx, currentPlaylistId, selectedListMenu}) => {
    // hooks
    const fetchDataOnScroll = useScrollFetch()


    // scroll box
    const scrollBoxClass = 'scroll-box w-full flex-1 py-[8px] bg-white relative overflow-hidden'
    const scrollBoxStyle = {
        borderRadius: `0 0 0 ${PLAYER_BORDER_VALUE}px`
    }


    // scroll wrapper
    const scollWrapperBox = 'scroll-wrapper w-full h-full pl-[8px] relative overflow-hidden'


    // scroll
    const scrollClass = 'scroll w-full h-full relative overflow-x-hidden overflow-y-auto pr-[8px]'
    const scrollStyle = {
        color
    }
    const onScroll = (e) => {
        const {scrollHeight, clientHeight, scrollTop} = e.target
        const hasReachedEnd = scrollHeight <= clientHeight + scrollTop

        if(hasReachedEnd){
            fetchDataOnScroll()
        }
    }


    // scroll bar
    const setScrollThumbColor = () => {
        document.documentElement.style.setProperty('--scrollbar-color', color)
    }
    useEffect(() => {
        setScrollThumbColor()
    }, [color])


    return(
        <div
            className={scrollBoxClass}
            style={scrollBoxStyle}
        >

            <div
                className={scollWrapperBox}
            >

                <div
                    className={scrollClass}
                    style={scrollStyle}
                    onScroll={e => onScroll(e)}
                >

                    <ItemSwitcher 
                        items={items} 
                        color={color} 
                        idx={idx} 
                        currentPlaylistId={currentPlaylistId} 
                        selectedListMenu={selectedListMenu} 
                    />

                </div>

            </div>

        </div>
    )
}


export default ScrollBox