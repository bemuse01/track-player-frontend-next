import useDataStore from '@/store/dataStore'
import { useEffect } from 'react'


const useMessages = () => {
    const {removeMessage} = useDataStore()
    const messages = useDataStore(state => state.messages)
    
    const repeatTime = 3000
    const removeOldMessage = () => {
        if(messages.length === 0) return
        removeMessage()
    }
    useEffect(() => {
        const interval = setInterval(removeOldMessage, repeatTime)

        return () => clearInterval(interval)
    })
}


export default useMessages