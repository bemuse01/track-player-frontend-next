import useMessage from './useMessage'
import { NEXT_PUBLIC_API_RESOURCE } from '@/config/const'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'


const method = 'get'
const api = NEXT_PUBLIC_API_RESOURCE


const fetcher = async (url, {arg}) => {
    const newUrl = url + arg
    const res = await axios({method, url: newUrl}) 
    return res
}


const useFetchUrl = (onSuccess = () => {}, onError = () => {}) => {
    const {createMessage} = useMessage()

    const onSuccessReq = (res) => {
        const status = res.status
        const {data, code, message} = res.data
        
        onSuccess(data)
    }

    const onErrorReq = (err) => {
        const {status, response} = err
        const {data, code, message} = response.data

        console.log(data, code, message)

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


export default useFetchUrl