'use client'

// lib
import { useState, useEffect, useRef } from 'react'

// store
import useDataStore from '@/store/dataStore'
import useStateStore from '@/store/stateStore'

// hooks
import useDevice from '@/hooks/useDevice'
import useMainData from '@/hooks/useMainData'
import usePlayer from '@/hooks/usePlayer'
import useInitialFetch from '@/hooks/useInitialFetch'

// components
import PlayerDesktop from './components/player/desktop/PlayerDesktop'
import PlayerMobile from './components/player/mobile/PlayerMobile'
import LoadingContainer from '@/components/loading/LoadingContainer'
import MessageContainer from '@/components/message/MessageContainer'


// TODO consider to use router push (like: host.com/:playlistid)
// TODO setting audio current time by moving progress bar thumb by pointer(mouse, touch) with should be debounced by using lodash _.debounce


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