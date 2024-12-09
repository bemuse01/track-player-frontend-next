import { useCallback, useEffect, useMemo } from 'react'
import { PLAYER_BORDER_VALUE } from '@/config/style'
import ItemSwitcher from './ItemSwitcher'
import useFetchTracks from '@/hooks/useFetchTracks'
import useDataStore from '@/store/dataStore'


const ScrollBox = ({tracks, items, color, idx, currentPlaylistId, selectedListMenu}) => {
    // store
    const {getTrackOrder} = useDataStore()


    // 
    const lastTrackId = useMemo(() => {
        const lastTrack = tracks[tracks.length - 1]
        return lastTrack?.track_id
    }, [tracks])
    const dontNeedLoadMore = useMemo(() => {
        const trackOrder = getTrackOrder() || []
        console.log(trackOrder)
        console.log(tracks)
        return trackOrder.length === tracks.length
    }, [tracks])


    // hooks
    const trackTrigger = useFetchTracks()


    // scroll box
    const scrollBoxClass = 'scroll-box w-full flex-1 py-[8px] bg-white relative overflow-hidden'
    const scrollBoxStyle = {
        borderRadius: `0 0 0 ${PLAYER_BORDER_VALUE}px`
    }


    // scroll wrapper
    const scollWrapperBox = 'scroll-wrapper w-[50%] h-full px-[8px] relative overflow-hidden'


    // scroll
    const scrollClass = 'scroll w-full h-full relative overflow-x-hidden overflow-y-auto pr-[6px]'
    const scrollStyle = {
        color
    }
    const onScroll = useCallback((e) => {
        const {scrollHeight, clientHeight, scrollTop} = e.target
        const hasReachedEnd = scrollHeight <= clientHeight + scrollTop

        if(hasReachedEnd){

            if(dontNeedLoadMore) return

            trackTrigger({playlistId: currentPlaylistId, lastTrackId})

        }
    }, [lastTrackId, currentPlaylistId, dontNeedLoadMore])


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