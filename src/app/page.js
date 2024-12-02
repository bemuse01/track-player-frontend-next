'use client'

// lib
import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

// store
import useDataStore from '@/store/dataStore'

// hooks
import useDevice from '@/hooks/useDevice'
import useFetchPlaylists from '@/hooks/useFetchPlaylists'
import useFetchTracks from '@/hooks/useFetchTracks'
import useMainData from '@/hooks/useMainData'
import usePlayer from '@/hooks/usePlayer'
import useMessages from '@/hooks/useMessage'

// components
import PlayerDesktop from './components/player/desktop/PlayerDesktop'
import PlayerMobile from './components/player/mobile/PlayerMobile'
import LoadingContainer from '@/components/loading/LoadingContainer'
import MessageContainer from '@/components/message/MessageContainer'


// TODO consider to use router push (like: host.com/:playlistid)
// TODO keep loading til complete to public images (vinyl, loading, default images)


const Root = () => {
    // store
    const {setCurrentPlaylistId, addMessage} = useDataStore()
    const playlists = useDataStore(state => state.playlists)
    const {tracks, idx} = useMainData()


    // root
    const rootClass = 'root w-full h-full absolute'


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