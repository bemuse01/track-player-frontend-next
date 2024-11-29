'use client'

// lib
import { useState, useEffect } from 'react'

// store
import useDataStore from '@/store/dataStore'

// hooks
import useDevice from '@/hooks/useDevice'
import useFetchPlaylists from '@/hooks/useFetchPlaylists'
import useFetchTracks from '@/hooks/useFetchTracks'
import useMainData from '@/hooks/useMainData'
import usePlayer from '@/hooks/usePlayer'
import useMessages from '@/hooks/useMessages'

// components
import PlayerDesktop from './components/player/desktop/PlayerDesktop'
import PlayerMobile from './components/player/mobile/PlayerMobile'
import LoadingContainer from '@/components/loading/LoadingContainer'
import MessageContainer from '@/components/message/MessageContainer'


const Root = () => {
    // store
    const {setCurrentPlaylistId} = useDataStore()
    const playlists = useDataStore(state => state.playlists)
    const {tracks, idx} = useMainData()


    // root
    const rootClass = 'root w-full h-full absolute'


    // message
    useMessages()


    // loading
    const [isLoading, setIsLoading] = useState(true)


    // player
    usePlayer({tracks, idx})


    // detect device
    const isMobile = useDevice()


    // data

    // tracks
    const onSuccessFetchTracks = (data) => {
        // console.log(data)
        setIsLoading(false)
    }
    const trigger = useFetchTracks(onSuccessFetchTracks)

    // playlist
    const onSuccessFecthPlaylists = (data) => {
        // console.log(data)
    }
    useFetchPlaylists(onSuccessFecthPlaylists)
    useEffect(() => {
        if(playlists !== null){

            const playlistId = playlists[0]._id

            setCurrentPlaylistId(playlistId)
            trigger(playlistId)

        }
    }, [playlists])


    return(
        <div
            className={rootClass}
        >

            {/* loading */}
            <LoadingContainer isLoading={isLoading} delay={1}/>

            {/* message */}
            <MessageContainer />

            {/* player */}
            { isMobile ? <PlayerMobile /> : <PlayerDesktop /> }

        </div>
    )
}


export default Root