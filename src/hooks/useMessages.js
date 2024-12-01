import useDataStore from '@/store/dataStore'
import { useEffect } from 'react'
import { MESSAGE_LIFE_TIME } from '@/config/config'

// TODO fix message time out logic

const useMessages = () => {
    const {removeMessageById} = useDataStore()
    const messages = useDataStore(state => state.messages)
    
    const velocity = 1 / 60 * 1000
    const removeOldMessage = () => {
    }
    useEffect(() => {
        // const animate = () => {
        //     removeOldMessage()
        //     requestAnimationFrame(animate)
        // }
        // animate()

        // return () => cancelAnimationFrame(animate)
    }, [])
}


export default useMessages