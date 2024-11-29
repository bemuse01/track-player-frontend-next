import useSWRMutation from 'swr/mutation'
import useDataStore from '@/store/dataStore'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


const method = 'get'
const api = process.env.NEXT_PUBLIC_API_UPDATE


const fetcher = async url => {
    const res = await axios({method, url})
    return res
}


const useUpdate = (onSuccess = () => {}) => {
    const {setPlaylists, addMessage} = useDataStore()

    const onSuccessFetchData = (res) => {
        const status = res.status
        const {data, error, message} = res.data
        const id = uuidv4()

        onSuccess(res.data)

        switch (status) {
            case 200:
                setPlaylists(data)
                addMessage({id, message})
                return
            case 204:
                addMessage({id, message})
                return
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


export default useUpdate