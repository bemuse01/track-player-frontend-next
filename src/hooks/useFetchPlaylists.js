import useSWR from 'swr'
import useDataStore from '@/store/dataStore'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


const method = 'get'
const api = process.env.NEXT_PUBLIC_API_PLAYLIST


const fetcher = async url => {
    const res = await axios({method, url}) 
    return res
}


const useFetchPlaylists = (onSuccess = () => {}) => {
    const {setPlaylists, addMessage} = useDataStore()

    const onSuccessFetchData = (res) => {
        const status = res.status
        const {data, error, message} = res.data
        const id = uuidv4()

        onSuccess(data)

        switch (status) {
            case 200:
                setPlaylists(data)
                // addMessage({id, message})
                return
            case 500:
                setPlaylists(null)
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
        onSuccess: data => onSuccessFetchData(data)
    }

    // const {data, isLoading, error, mutate} = useSWR(url, fetcher(method), config)
    useSWR(api, fetcher, config)
}


export default useFetchPlaylists