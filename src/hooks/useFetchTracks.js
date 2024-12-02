import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import useMessage from './useMessage'


const method = 'post'
const api = process.env.NEXT_PUBLIC_API_TRACK


const fetcher = async (url, {arg}) => {
    const newUrl = url + '/' + arg
    const res = await axios({method, url: newUrl}) 
    return res
}


const useFetchTracks = (onSuccess = () => {}, onError = () => {}) => {
    const {setTracks} = useDataStore()
    const {setIdx} = usePlayerStore()
    const {createMessage} = useMessage()

    const onSuccessFetchData = (res) => {
        const status = res.status
        const {code, data, message} = res.data

        if(status === 200){
            setTracks(data)
            setIdx(0)
        }else{
            createMessage(code, message)
        }

        onSuccess(data)
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
        revalidateOnMount: false,
        onSuccess: data => onSuccessFetchData(data),
        onError: err => onErrorReq(err)
    }
    const {trigger} = useSWRMutation(api, fetcher, config)


    return trigger
}


export default useFetchTracks