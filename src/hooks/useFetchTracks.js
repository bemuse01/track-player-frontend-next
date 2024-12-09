import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import useMessage from './useMessage'
import { NEXT_PUBLIC_API_TRACK } from '@/config/const'
import _ from 'lodash'


const method = 'post'
const api = NEXT_PUBLIC_API_TRACK


const fetcher = async (url, {arg}) => {
    // const {playlistId, lastTrackId} = arg
    const newUrl = url
    const res = await axios({method, url: newUrl, data: arg}) 
    return res
}


const useFetchTracks = (onSuccess = () => {}, onError = () => {}) => {
    // store
    const {setTracks} = useDataStore()
    const tracks = useDataStore(state => state.tracks)
    const {setIdx} = usePlayerStore()
    const {createMessage} = useMessage()


    const onSuccessFetchData = (res) => {
        const status = res.status
        const {code, data, message} = res.data

        if(status === 200){
            const newData = _.unionWith(tracks, data, (x, y) => x.track_id === y.track_id)
            setTracks(newData)
            setIdx(0)
        }else{
            createMessage(code, message)
        }

        onSuccess(data)
    }

    const onErrorReq = (err) => {
        const {status, response} = err
        // const {data, code, message} = response?.data?
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
        onSuccess: data => onSuccessFetchData(data),
        onError: err => onErrorReq(err)
    }
    const {trigger} = useSWRMutation(api, fetcher, config)


    return trigger
}


export default useFetchTracks