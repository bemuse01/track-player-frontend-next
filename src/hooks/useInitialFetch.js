import { v4 as uuid } from 'uuid'
import usePageLoad from './usePageLoad'
import useDataStore from '@/store/dataStore'
import useFetchPlaylists from './useFetchPlaylists'
import useFetchTracks from './useFetchTracks'
import { useEffect, useRef } from 'react'
import useFetchRoot from './useFetchRoot'


const useInitialFetch = ({playlists}) => {
    // store
    const {setCurrentPlaylistId} = useDataStore()


    // load stats
    const {addLoadStat, setLoadStatToDone} = usePageLoad()
    const loadId = useRef(uuid())


    // data: tracks
    const onSuccessFetchTracks = () => {
        setLoadStatToDone(loadId.current)
    }
    const trackTrigger = useFetchTracks(onSuccessFetchTracks)


    // data: playlist
    const onSuccessFecthPlaylists = () => {
    }
    const playlistTrigger = useFetchPlaylists(onSuccessFecthPlaylists)



    // data: root
    const rootTrigger = useFetchRoot()


    // 
    useEffect(() => {
        if(playlists.length !== 0){

            const playlist = playlists[0]
            const playlistId = playlist?.playlist_id

            setCurrentPlaylistId(playlistId)
            trackTrigger({playlistId})

        }
    }, [playlists])


    // 
    useEffect(() => {
        addLoadStat(loadId.current)
        rootTrigger()
        playlistTrigger()
    }, [])
}


export default useInitialFetch