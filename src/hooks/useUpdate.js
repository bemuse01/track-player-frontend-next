import useSWRMutation from 'swr/mutation'
import useDataStore from '@/store/dataStore'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


const method = 'post'
const api = process.env.NEXT_PUBLIC_API_UPDATE


const fetcher = async url => {
    const res = await axios({method, url})
    return res
}


const useUpdate = (onSuccess = () => {}, onError = () => {}) => {
    const {setPlaylists, addMessage} = useDataStore()

    const onSuccessReq = (res) => {
        const status = res.status
        const {data, code, message} = res.data
        const id = uuidv4()
        const createdAt = window.performance.now()

        onSuccess(res.data)

        switch (status) {
            case 200:
                setPlaylists(data)
                addMessage({id, code, message, createdAt})
                return
            case 204:
                addMessage({id, code, message, createdAt})
                return
            default:
                return 
        }
    }

    const onErrorReq = (err) => {
        const {status, response} = err
        const {data, code, message} = response.data
        const id = uuidv4()

        onError()

        switch (status) {
            case 500:
                addMessage({id, code, message, createdAt})
                return
            default:
                return 
        }
    }

    const config = {
        refreshInterval: 0,
        refreshWhenHidden: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
        revalidateOnMount: false,
        onSuccess: data => onSuccessReq(data),
        onError: err => onErrorReq(err)
    }
    const {trigger} = useSWRMutation(api, fetcher, config)


    return trigger
}


export default useUpdate