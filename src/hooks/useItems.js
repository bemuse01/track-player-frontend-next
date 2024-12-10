import { useMemo } from 'react'
import useDataStore from '@/store/dataStore'
import useStateStore from '@/store/stateStore'
import { LIST_MENU } from '@/config/config'
import useMainData from './useMainData'
import useTrackOrder from './useTrackOrder'


const useItems = () => {
    const {playlists, tracks} = useMainData()
    const {getTrackById} = useDataStore()
    const selectedListMenu = useStateStore(state => state.selectedListMenu)


    // hooks
    const trackOrder = useTrackOrder()

    const items = useMemo(() => {
        switch(selectedListMenu){
            case LIST_MENU.TRACK:

                if(tracks.length === 0) return []

                return trackOrder.map((id, i) => {
                    const track = getTrackById(id)
                    const artist = track?.artist
                    const title = track?.title

                    return {
                        key: id,
                        order: i,
                        artist,
                        title,
                        len: trackOrder.length,
                    }
                })

            case LIST_MENU.PLAYLIST:

                return playlists.map(playlist => ({
                    id: playlist.playlist_id,
                    playlistName: playlist.playlist_name,

                }))
        
            default:
                return []
        }

        
    }, [tracks, selectedListMenu, trackOrder])


    return items
}


export default useItems