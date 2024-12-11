import { useEffect, useCallback } from 'react'
import useDataStore from '@/store/dataStore'
import defaultThumb from '@/public/images/default.jpg'
import useFetchUrl from './useFetchUrl'
import useCurrentTrack from './useCurrentTrack'


const useThumbnailUrl = ({tracks, idx}) => {
    // store
    const {getTrackById, setThumbnailUrl} = useDataStore()


    // hooks
    const track = useCurrentTrack()


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
        if(!track) return

        const track_id = track?.track_id
        const thumbnail = track?.thumbnail
        const type = thumbnail?.type
        const query = `?id=${track_id}&type=${type}`

        if(!track_id || !thumbnail || !type) return

        urlTrigger(query)
    }, [track])

    useEffect(() => {
        changeUrl()
    }, [changeUrl])
}


export default useThumbnailUrl