import { useCallback, useEffect, useState } from 'react'
import useTrackOrder from './useTrackOrder'
import useMainData from './useMainData'
import useDataStore from '@/store/dataStore'

const useInfo = () => {
    // store
    const {getTrackById} = useDataStore()


    // hooks
    const {tracks, idx} = useMainData()
    const trackOrder = useTrackOrder()


    // 
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')

    const setInfo = useCallback(() => {
        const id = trackOrder[idx]

        if(!id) return

        const track = getTrackById(id)
        const newTitle = track?.title
        const newArtist = track?.artist

        setTitle(newTitle)
        setArtist(newArtist)
    }, [trackOrder, idx])

    useEffect(() => {
        if(tracks.length !== 0){
            setInfo()
        }
    }, [tracks, setInfo])


    return {title, artist}
}

export default useInfo