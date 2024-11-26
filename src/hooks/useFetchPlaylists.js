import useSWR from 'swr'
import useDataStore from '@/store/dataStore'
import axios from 'axios'


const method = 'get'
const api = process.env.NEXT_PUBLIC_API_PLAYLIST


const fetcher = async url => {
    const res = await axios({method, url}) 
    return res.data
}


const useFetchPlaylists = (onSuccess = () => {}) => {
    const {setPlaylists} = useDataStore()

    const onSuccessFetchData = (newData) => {
        const {playlists} = newData
        setPlaylists(playlists)

        onSuccess(newData)
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