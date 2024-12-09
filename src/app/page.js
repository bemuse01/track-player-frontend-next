'use client'

// lib

// store
import useDataStore from '@/store/dataStore'
import useStateStore from '@/store/stateStore'

// hooks
import useDevice from '@/hooks/useDevice'
import useMainData from '@/hooks/useMainData'
import usePlayer from '@/hooks/usePlayer'
import useInitialFetch from '@/hooks/useInitialFetch'
import useThumbnailUrl from '@/hooks/useThumbnailUrl'

// components
import PlayerDesktop from './components/player/desktop/PlayerDesktop'
import PlayerMobile from './components/player/mobile/PlayerMobile'
import LoadingContainer from '@/components/loading/LoadingContainer'
import MessageContainer from '@/components/message/MessageContainer'


// TODO consider to use router push (like: host.com/:playlistid)
// TODO 모바일에서 비닐 컴포넌트 썸네일의 화질이 안좋은 문제


const Root = () => {
    // store
    const playlists = useDataStore(state => state.playlists)
    const {tracks, idx} = useMainData()
    const isPageLoaded = useStateStore(state => state.isPageLoaded)


    // root
    const rootClass = 'root w-full h-full absolute'


    // on page render
    // player
    usePlayer({tracks, idx})

    // detect device
    const isMobile = useDevice()

    // initial fetch playlists, tracks
    useInitialFetch({playlists})

    // fetch resource
    useThumbnailUrl({tracks, idx})


    return(
        <div
            className={rootClass}
        >

            {/* loading */}
            <LoadingContainer isLoading={!isPageLoaded} delay={1}/>

            {/* message */}
            <MessageContainer />

            {/* player */}
            { isMobile ? <PlayerMobile /> : <PlayerDesktop /> }

        </div>
    )
}


export default Root