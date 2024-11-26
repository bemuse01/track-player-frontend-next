import { useEffect } from 'react'
import usePlayerStore from '@/store/playerStore'
import useDataStore from '@/store/dataStore'


const usePlayer = ({tracks, idx}) => {
    const {getTrackById, getTrackOrder} = useDataStore()
    const {setPlayer, change, dispose, setIdx} = usePlayerStore()
    const player = usePlayerStore(state => state.player)
    

    // player
    const initPlayer = () => {
        const trackOrder = getTrackOrder()
        const id = trackOrder[idx]
        const {audio_url} = getTrackById(id)

        setPlayer(tracks)
        change(audio_url)
    }
    const changeByIdx = () => {
        const trackOrder = getTrackOrder()
        const id = trackOrder[idx]
        const {audio_url} = getTrackById(id)

        change(audio_url)
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