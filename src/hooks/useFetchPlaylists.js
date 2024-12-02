import useSWR from 'swr'
import useDataStore from '@/store/dataStore'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import useMessage from './useMessage'
import { NEXT_PUBLIC_API_PLAYLIST } from '@/config/const'


const method = 'get'
const api = NEXT_PUBLIC_API_PLAYLIST


const fetcher = async url => {
    const res = await axios({method, url}) 
    return res
}


const useFetchPlaylists = (onSuccess = () => {}, onError = () => {}) => {
    const {setPlaylists} = useDataStore()
    const {createMessage} = useMessage()

    const onSuccessReq = (res) => {
        const status = res.status
        const {data, code, message} = res.data
        const id = uuidv4()

        onSuccess(data)

        if(status === 200){
            setPlaylists(data)
        }else{
            createMessage(code, message)
        }
    }

    const onErrorReq = (err) => {
        const {status, response} = err
        const {data, code, message} = response.data

        createMessage(code, message)

        onError()
    }

    const config = {
        refreshInterval: 0,
        refreshWhenHidden: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
        onSuccess: data => onSuccessReq(data),
        onError: err => onErrorReq(err)
    }

    // const {data, isLoading, error, mutate} = useSWR(url, fetcher(method), config)
    useSWR(api, fetcher, config)
}


export default useFetchPlaylists