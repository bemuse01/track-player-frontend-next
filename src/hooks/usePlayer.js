import { useCallback, useEffect, useMemo } from 'react'
import usePlayerStore from '@/store/playerStore'
import useDataStore from '@/store/dataStore'
import useFetchUrl from './useFetchUrl'
import useTrackOrder from './useTrackOrder'
import useCurrentTrack from './useCurrentTrack'

// TODO 새 데이터가 로드되면 재생을 멈추지 않게 해야함


const usePlayer = ({tracks, idx}) => {
    const {getTrackById} = useDataStore()
    const {setPlayer, change, dispose, setTrackCount} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    // hooks
    const track = useCurrentTrack()


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
    const initPlayer = () => {
        dispose()
        setPlayer()
    }

    const changeByIdx = useCallback(() => {
        if(!track) return

        const track_id = track?.track_id
        const audio = track?.audio
        const type = audio?.type
        const query = `?id=${track_id}&type=${type}`

        if(!track_id || !audio || !type) return

        urlTrigger(query)
    }, [track])

    useEffect(() => {
        if(tracks.length === 0) return

        setTrackCount(tracks.length)
    }, [tracks])

    useEffect(() => {
        if(player === null) return

        changeByIdx()
    }, [changeByIdx, player])

    useEffect(() => {
        initPlayer()
    }, [])
}


export default usePlayer