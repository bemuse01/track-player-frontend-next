import useStateStore from '@/store/stateStore'
import useMainData from './useMainData'
import { LIST_MENU } from '@/config/config'
import { useCallback, useMemo } from 'react'
import useFetchTracks from './useFetchTracks'
import useFetchPlaylists from './useFetchPlaylists'
import useTrackOrder from './useTrackOrder'
import useDataStore from '@/store/dataStore'

// TODO 플레이리스트 부분 이어서 코딩 (로드할 데이터 없으면 스크롤 로딩 중지)

const useScrollFetch = () => {
    const {playlists, tracks, currentPlaylistId} = useMainData()
    const maxPlaylistCount = useDataStore(state => state.maxPlaylistCount)
    const selectedListMenu = useStateStore(state => state.selectedListMenu)


    // hooks
    const playlistTrigger = useFetchPlaylists()
    const trackTrigger = useFetchTracks()
    const trackOrder = useTrackOrder()


    // playlist
    const lastObjectId = useMemo(() => {
        if(playlists.length === 0) return ''

        const playlist = playlists[playlists.length - 1]
        const _id = playlist?._id
        return _id
    }, [currentPlaylistId, playlists])
    const dontNeedLoadMorePlaylists = useMemo(() => {
        return playlists.length === maxPlaylistCount
    }, [playlists, maxPlaylistCount])



    // track
    const lastTrackId = useMemo(() => {
        const lastTrack = tracks[tracks.length - 1]
        return lastTrack?.track_id
    }, [tracks])
    const dontNeedLoadMoreTracks = useMemo(() => {
        return trackOrder.length === tracks.length
    }, [tracks, trackOrder])


    // method
    const fetchDataOnScroll = useCallback(() => {
        switch (selectedListMenu) {
            case LIST_MENU.TRACK:
                if(dontNeedLoadMoreTracks) return

                trackTrigger({playlistId: currentPlaylistId, lastTrackId})
                return
            case LIST_MENU.PLAYLIST:
                if(dontNeedLoadMorePlaylists) return

                playlistTrigger({lastObjectId})
                return
            default:
                return
        }
    }, [currentPlaylistId, lastTrackId, dontNeedLoadMoreTracks, dontNeedLoadMorePlaylists, selectedListMenu])


    return fetchDataOnScroll
}

export default useScrollFetch