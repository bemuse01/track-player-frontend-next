import { useState, useEffect } from 'react'
import useDataStore from '@/store/dataStore'
import defaultThumb from '@/public/images/default.jpg'


const useUrl = ({tracks, idx}) => {
    const {getTrackById, getTrackOrder} = useDataStore()

    const [url, setUrl] = useState(defaultThumb.src)
    const changeUrl = () => {
        const trackOrder = getTrackOrder()
        const id = trackOrder[idx]
        const newUrl = getTrackById(id).thumbnail_url
        setUrl(newUrl)
    }

    useEffect(() => {
        if(tracks !== null){
            if(tracks.length !== 0) changeUrl()
        }
    }, [tracks, idx])


    return {url}
}


export default useUrl