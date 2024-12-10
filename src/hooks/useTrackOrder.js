import { useMemo } from 'react'
import useMainData from './useMainData'

const useTrackOrder = () => {
    const {playlists, currentPlaylistId} = useMainData()

    const trackOrder = useMemo(() => {
        if(playlists.length === 0) return []
        if(currentPlaylistId === '') return []

        const playlist = playlists.find(p => p.playlist_id === currentPlaylistId)
        const trackOrder = playlist?.track_order

        return trackOrder

    }, [playlists, currentPlaylistId])

    return trackOrder
}

export default useTrackOrder