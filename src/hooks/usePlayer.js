import { useEffect } from 'react'
import usePlayerStore from '@/store/playerStore'
import useDataStore from '@/store/dataStore'
import useFetchUrl from './useFetchUrl'


const usePlayer = ({tracks, idx}) => {
    const {getTrackById, getTrackOrder} = useDataStore()
    const {setPlayer, change, dispose} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    // swr
    const onError = () => {
        change('')
    }
    const onSuccess = (data) => {
        console.log(data)
        change(data)
    }
    const urlTrigger = useFetchUrl(onSuccess, onError)


    // player
    const initPlayer = () => {
        const trackOrder = getTrackOrder()
        const id = trackOrder[idx]
        const {track_id, audio} = getTrackById(id)
        const {type} = audio
        const query = `?id=${track_id}&type=${type}`

        setPlayer(tracks)
        urlTrigger(query)
    }
    const changeByIdx = () => {
        const trackOrder = getTrackOrder()
        const id = trackOrder[idx]
        const {track_id, audio} = getTrackById(id)
        const {type} = audio
        const query = `?id=${track_id}&type=${type}`

        urlTrigger(query)
    }

    useEffect(() => {
        if(tracks !== null){

            if(player !== null) dispose()

            initPlayer()
            
        }

    }, [tracks])

    useEffect(() => {
        if(player !== null){
            changeByIdx()
        }

    }, [player, idx])
}


export default usePlayer