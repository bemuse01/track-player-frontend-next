import useSWRMutation from 'swr/mutation'
import useDataStore from '@/store/dataStore'
import axios from 'axios'
import useMessage from './useMessage'


const method = 'post'
const api = process.env.NEXT_PUBLIC_API_UPDATE


const fetcher = async url => {
    const res = await axios({method, url})
    return res
}


const useUpdate = (onSuccess = () => {}, onError = () => {}) => {
    const {setPlaylists} = useDataStore()
    const {createMessage} = useMessage()

    const onSuccessReq = (res) => {
        const status = res.status
        const {data, code, message} = res.data

        if(status === 200){
            setPlaylists(data)
        }

        createMessage(code, message)

        onSuccess(res.data)
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
        onSuccess: data => onSuccessReq(data),
        onError: err => onErrorReq(err)
    }
    const {trigger} = useSWRMutation(api, fetcher, config)


    return trigger
}


export default useUpdate