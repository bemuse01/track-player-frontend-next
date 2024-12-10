import useSWRMutation from 'swr/mutation'
import useDataStore from '@/store/dataStore'
import axios from 'axios'
import useMessage from './useMessage'
import { NEXT_PUBLIC_API_PLAYLIST } from '@/config/const'
import _ from 'lodash'


const method = 'post'
const api = NEXT_PUBLIC_API_PLAYLIST


const fetcher = async (url, {arg}) => {
    // const {playlistId, lastTrackId} = arg
    const data = arg || {}
    const res = await axios({method, url, data}) 
    return res
}


const useFetchPlaylists = (onSuccess = () => {}, onError = () => {}) => {
    const {addPlaylists} = useDataStore()
    const playlists = useDataStore(state => state.playlists)
    const {createMessage} = useMessage()

    const onSuccessReq = (res) => {
        const status = res.status
        const {data, code, message} = res.data

        onSuccess(data)

        if(status === 200){
            // const newData = _.unionWith(playlists, data, (x, y) => x.playlist_id === y.playlist_id)
            addPlaylists(data)
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
        revalidateOnMount: false,
        onSuccess: data => onSuccessReq(data),
        onError: err => onErrorReq(err)
    }

    const {trigger, data} = useSWRMutation(api, fetcher, config)
    // const {data, isLoading, error, mutate} = useSWR(api, fetcher, config)
    // useSWR(api, fetcher, config)

    return trigger
}


export default useFetchPlaylists