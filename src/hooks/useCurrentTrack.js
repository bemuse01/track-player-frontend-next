import { useMemo } from 'react'
import useMainData from './useMainData'
import useTrackOrder from './useTrackOrder'
import useDataStore from '@/store/dataStore'

const useCurrentTrack = () => {
    // store
    const {getTrackById} = useDataStore()


    // hooks
    const {tracks, idx} = useMainData()
    const trackOrder = useTrackOrder()


    const track = useMemo(() => {
        if(tracks.length === 0) return null
        if(trackOrder.length === 0) return null

        const id = trackOrder[idx]
        const track = getTrackById(id)

        return track
    }, [idx, tracks, trackOrder])


    return track
}

export default useCurrentTrack