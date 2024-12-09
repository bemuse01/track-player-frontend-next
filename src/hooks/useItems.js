import { useMemo } from 'react'
import useDataStore from '@/store/dataStore'
import useStateStore from '@/store/stateStore'
import { LIST_MENU } from '@/config/config'


const useItems = () => {
    const tracks = useDataStore(state => state.tracks)
    const playlists = useDataStore(state => state.playlists)
    const {getTrackById, getTrackOrder} = useDataStore()
    const selectedListMenu = useStateStore(state => state.selectedListMenu)

    const items = useMemo(() => {
        switch(selectedListMenu){
            case LIST_MENU.TRACK:

                if(tracks.length === 0) return []
                const trackOrder = getTrackOrder() || []

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
                    id: playlist._id,
                    playlistName: playlist.playlist_name,

                }))
        
            default:
                return []
        }

        
    }, [tracks, selectedListMenu])


    return items
}


export default useItems