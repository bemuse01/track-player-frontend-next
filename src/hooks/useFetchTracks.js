import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'


const method = 'post'
const api = process.env.NEXT_PUBLIC_API_TRACK


const fetcher = async (url, {arg}) => {
    const newUrl = url + '/' + arg
    const res = await axios({method, url: newUrl}) 
    return res.data
}


const useFetchTracks = (onSuccess = () => {}) => {
    const {setTracks} = useDataStore()
    const {setIdx} = usePlayerStore()

    const onSuccessFetchData = (newData) => {
        const {tracks} = newData
        
        setTracks(tracks)

        setIdx(0)

        onSuccess(newData)
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