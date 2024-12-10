import { useCallback, useEffect } from 'react'
import usePlayerStore from '@/store/playerStore'
import useDataStore from '@/store/dataStore'
import useFetchUrl from './useFetchUrl'
import useTrackOrder from './useTrackOrder'


const usePlayer = ({tracks, idx}) => {
    const {getTrackById} = useDataStore()
    const {setPlayer, change, dispose} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    // hooks
    const trackOrder = useTrackOrder()


    // swr
    const onError = () => {
        change('')
    }
    const onSuccess = (data) => {
        // console.log(data)
        change(data)
    }
    const urlTrigger = useFetchUrl(onSuccess, onError)


    // player
    const initPlayer = useCallback(() => {
        const id = trackOrder[idx]
        if(!id) return

        const track = getTrackById(id)
        const track_id = track?.track_id
        const audio = track?.audio
        const type = audio?.type
        const query = `?id=${track_id}&type=${type}`

        if(!track_id || !audio || !type) return

        setPlayer(tracks)
        // urlTrigger(query)
    }, [trackOrder, idx, tracks])

    const changeByIdx = useCallback(() => {
        const id = trackOrder[idx]
        if(!id) return

        const track = getTrackById(id)
        const track_id = track?.track_id
        const audio = track?.audio
        const type = audio?.type
        const query = `?id=${track_id}&type=${type}`

        if(!track_id || !audio || !type) return

        urlTrigger(query)
    }, [trackOrder, idx])

    useEffect(() => {
        if(tracks.length === 0) return

        dispose()
        initPlayer()
    }, [initPlayer, tracks])

    useEffect(() => {
        if(player === null) return

        changeByIdx()
    }, [changeByIdx, player])
}


export default usePlayer