import { useState, useEffect, useCallback } from 'react'
import useDataStore from '@/store/dataStore'
import defaultThumb from '@/public/images/default.jpg'

// TODO refator to get request SAS url to backend with swr fetch 

const useUrl = ({tracks, idx}) => {
    const {getTrackById, getTrackOrder} = useDataStore()

    const [url, setUrl] = useState(defaultThumb.src)
    
    const changeUrl = useCallback(() => {
        const trackOrder = getTrackOrder()
        const id = trackOrder[idx]
        const newUrl = getTrackById(id).thumbnail_url
        setUrl(newUrl)
    }, [idx])

    useEffect(() => {
        if(tracks !== null){
            if(tracks.length !== 0) changeUrl()
        }
    }, [tracks, changeUrl])


    return {url}
}


export default useUrl