import { v4 as uuid } from 'uuid'
import usePageLoad from './usePageLoad'
import useDataStore from '@/store/dataStore'
import useFetchPlaylists from './useFetchPlaylists'
import useFetchTracks from './useFetchTracks'
import { useEffect, useRef } from 'react'


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
    useFetchPlaylists(onSuccessFecthPlaylists)
    useEffect(() => {
        if(playlists.length !== 0){

            const playlist = playlists[0]
            const playlistId = playlist?._id

            setCurrentPlaylistId(playlistId)
            trackTrigger({playlistId})

        }
    }, [playlists])


    // 
    useEffect(() => {
        addLoadStat(loadId.current)
    }, [])
}


export default useInitialFetch