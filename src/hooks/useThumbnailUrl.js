import { useEffect, useCallback } from 'react'
import useDataStore from '@/store/dataStore'
import defaultThumb from '@/public/images/default.jpg'
import useFetchUrl from './useFetchUrl'
import useTrackOrder from './useTrackOrder'


const useThumbnailUrl = ({tracks, idx}) => {
    const {getTrackById, setThumbnailUrl} = useDataStore()
    const trackOrder = useTrackOrder()


    // swr
    const onError = () => {
        setThumbnailUrl(defaultThumb.src)
    }
    const onSuccess = (data) => {
        setThumbnailUrl(data)
    }
    const urlTrigger = useFetchUrl(onSuccess, onError)


    // url
    const changeUrl = useCallback(() => {
        const id = trackOrder[idx]
        if(!id) return

        const track = getTrackById(id)
        const track_id = track?.track_id
        const thumbnail = track?.thumbnail
        const type = thumbnail?.type
        const query = `?id=${track_id}&type=${type}`

        if(!track_id || !thumbnail || !type) return

        urlTrigger(query)
    }, [idx, trackOrder, tracks])

    useEffect(() => {
        if(tracks.length === 0) return

        changeUrl()
    }, [tracks, changeUrl])
}


export default useThumbnailUrl