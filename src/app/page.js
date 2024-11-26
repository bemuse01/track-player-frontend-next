'use client'

// lib
import { useState, useEffect } from 'react'

// store
import useDataStore from '@/store/dataStore'
import useStateStore from '@/store/stateStore'

// hooks
import useDevice from '@/hooks/useDevice'
import useFetchPlaylists from '@/hooks/useFetchPlaylists'
import useFetchTracks from '@/hooks/useFetchTracks'
import useMainData from '@/hooks/useMainData'
import usePlayer from '@/hooks/usePlayer'

// components
import PlayerDesktop from './components/player/desktop/PlayerDesktop'
import PlayerMobile from './components/player/mobile/PlayerMobile'
import LoadingContainer from '@/components/loading/LoadingContainer'


const Root = () => {
    // store
    const {setCurrentPlaylistId} = useDataStore()
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
    const onSuccessFetchTracks = (newData) => {
        console.log(newData)
        setIsLoading(false)
    }
    const trigger = useFetchTracks(onSuccessFetchTracks)

    // playlist
    const onSuccessFecthPlaylists = (newData) => {
        console.log(newData)
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
            

            {/* player */}
            { isMobile ? <PlayerMobile /> : <PlayerDesktop /> }

        </div>
    )
}


export default Root