import useDataStore from '@/store/dataStore'
import { MESSAGE_LIFE_TIME } from '@/config/config'
import { v4 as uuid } from 'uuid'


const useMessage = () => {
    const {addMessage, removeMessage} = useDataStore()
    // const messages = useDataStore(state => state.messages)

    const setMessageTimeout = () => {
        setTimeout(() => {
            removeMessage()
        }, MESSAGE_LIFE_TIME)
    }

    const createMessage = (code, message) =>{ 
        const id = uuid()
        
        addMessage({id, code, message})

        setMessageTimeout()
    }

    return {createMessage}
}


export default useMessage