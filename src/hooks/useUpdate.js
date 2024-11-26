import useSWRMutation from 'swr/mutation'
import useDataStore from '@/store/dataStore'
import axios from 'axios'


const method = 'get'
const api = process.env.NEXT_PUBLIC_API_UPDATE


const fetcher = async url => {
    const res = await axios({method, url}) 
    return res.data
}


const useUpdate = (onSuccess = () => {}) => {
    const {setPlaylists} = useDataStore()

    const onSuccessFetchData = (newData) => {
        const {playlists, message, error} = newData

        if(message || error) return
        
        setPlaylists(playlists)

        onSuccess(newData)
    }

    // const {data, isLoading, error, mutate} = useSWR(url, fetcher(method), config)
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


export default useUpdate