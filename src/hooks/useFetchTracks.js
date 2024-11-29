import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


const method = 'post'
const api = process.env.NEXT_PUBLIC_API_TRACK


const fetcher = async (url, {arg}) => {
    const newUrl = url + '/' + arg
    const res = await axios({method, url: newUrl}) 
    return res
}


const useFetchTracks = (onSuccess = () => {}) => {
    const {setTracks, addMessage} = useDataStore()
    const {setIdx} = usePlayerStore()

    const onSuccessFetchData = (res) => {
        const status = res.status
        const {data, error, message} = res.data
        const id = uuidv4()
        
        onSuccess(data)

        switch (status) {
            case 200:
                setTracks(data)
                setIdx(0)
                return
            case 404:
                addMessage({id, message})
            case 500:
                addMessage({id, message})
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
        onSuccess: data => onSuccessFetchData(data)
    }
    const {trigger} = useSWRMutation(api, fetcher, config)


    return trigger
}


export default useFetchTracks