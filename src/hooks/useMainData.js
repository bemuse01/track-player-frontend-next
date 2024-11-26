import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'


const useMainData = () => {
    const tracks = useDataStore(state => state.tracks)
    const currentPlaylistId = useDataStore(state => state.currentPlaylistId)
    const idx = usePlayerStore(state => state.idx)
    const player = usePlayerStore(state => state.player)

    return {tracks, idx, currentPlaylistId, player}
}


export default useMainData