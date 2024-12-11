// store
import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'

// hook
import useFetchTracks from '@/hooks/useFetchTracks'

// components
import TrackItem from './TrackItem'
import PlaylistItem from './PlaylistItem'

// etc
import { LIST_MENU } from '@/config/config'


const ItemSwitcher = ({items, color, idx, currentPlaylistId, selectedListMenu}) => {
    // store
    const {setCurrentPlaylistId, setTracks} = useDataStore()
    const {setIdx, pause} = usePlayerStore()

    // hooks
    const trackTrigger = useFetchTracks()


    // track
    const onClickTrackItem = (order) => {
        pause()
        setIdx(order)
    }


    // playlist
    const resetTrackInfo = () => {
        setTracks([])
        setIdx(0)
    }
    const onClickPlaylistItem = (playlistId) => {
        resetTrackInfo()
        setCurrentPlaylistId(playlistId)
        trackTrigger({playlistId})
    }


    switch(selectedListMenu){
        case LIST_MENU.TRACK:

            return (
                items.map(item => (
                    <TrackItem
                        key={item.key} 
                        title={item.title}
                        artist={item.artist}
                        order={item.order}
                        len={item.len}
                        color={color}
                        idx={idx}
                        onClick={onClickTrackItem}
                    />
                ))
            )

        case LIST_MENU.PLAYLIST:

            return (
                items.map(item => (
                    <PlaylistItem
                        key={item.id}
                        playlistId={item.id}
                        playlistName={item.playlistName}
                        color={color}
                        currentPlaylistId={currentPlaylistId}
                        onClick={onClickPlaylistItem}
                    />
                ))
            )

        default:
            return <></>
    }

}


export default ItemSwitcher