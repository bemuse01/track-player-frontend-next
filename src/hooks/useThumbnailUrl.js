import { useEffect, useCallback } from 'react'
import useDataStore from '@/store/dataStore'
import defaultThumb from '@/public/images/default.jpg'
import useFetchUrl from './useFetchUrl'


const useThumbnailUrl = ({tracks, idx}) => {
    const {getTrackById, getTrackOrder, setThumbnailUrl} = useDataStore()


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
        const trackOrder = getTrackOrder()
        const id = trackOrder[idx]
        const {track_id, thumbnail} = getTrackById(id)
        const {type} = thumbnail
        const query = `?id=${track_id}&type=${type}`

        urlTrigger(query)
    }, [idx])

    useEffect(() => {
        if(tracks.length !== 0) changeUrl()
    }, [tracks, changeUrl])
}


export default useThumbnailUrl