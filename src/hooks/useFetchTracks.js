import useDataStore from '@/store/dataStore'
import usePlayerStore from '@/store/playerStore'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import useMessage from './useMessage'
import { NEXT_PUBLIC_API_TRACK } from '@/config/const'
import _ from 'lodash'
import { useEffect } from 'react'


const method = 'post'
const api = NEXT_PUBLIC_API_TRACK


const fetcher = async (url, {arg}) => {
    // const {playlistId, lastTrackId} = arg
    const data = arg || {}
    const res = await axios({method, url, data}) 
    return res
}


const useFetchTracks = (onSuccess = () => {}, onError = () => {}) => {
    // store
    const {addTracks} = useDataStore()
    const {createMessage} = useMessage()


    const onSuccessReq = (res) => {
        const status = res.status
        const {code, data, message} = res.data

        if(status === 200){
            addTracks(data)
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
        onSuccess: data => onSuccessReq(data),
        onError: err => onErrorReq(err)
    }
    const {trigger} = useSWRMutation(api, fetcher, config)


    return trigger
}


export default useFetchTracks