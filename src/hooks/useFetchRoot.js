import useDataStore from '@/store/dataStore'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import useMessage from './useMessage'


const method = 'get'
const api = '/api/'


const fetcher = async (url) => {
    const res = await axios({method, url}) 
    return res
}


const useFetchRoot = (onSuccess = () => {}, onError = () => {}) => {
    // store
    const {setMaxPlaylistCount} = useDataStore()
    const {createMessage} = useMessage()


    const onSuccessReq = (res) => {
        const status = res.status
        const {code, data, message} = res.data

        if(status === 200){
            setMaxPlaylistCount(data)
        }else{
            createMessage(code, message)
        }

        onSuccess(data)
    }

    const onErrorReq = (err) => {
        const {status, response} = err
        const data = response?.data?.data
        const code = response?.data?.code
        const message = response?.data?.message

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
        onSuccess: data => onSuccessReq(data),
        onError: err => onErrorReq(err)
    }
    const {trigger} = useSWRMutation(api, fetcher, config)


    return trigger
}


export default useFetchRoot