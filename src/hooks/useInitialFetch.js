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
    const trigger = useFetchTracks(onSuccessFetchTracks)


    // data: playlist
    const onSuccessFecthPlaylists = () => {
    }
    useFetchPlaylists(onSuccessFecthPlaylists)
    useEffect(() => {
        if(playlists !== null){

            const playlistId = playlists[0]._id

            setCurrentPlaylistId(playlistId)
            trigger(playlistId)

        }
    }, [playlists])


    // 
    useEffect(() => {
        addLoadStat(loadId.current)
    }, [])
}


export default useInitialFetch