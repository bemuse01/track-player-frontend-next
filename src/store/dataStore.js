import { create } from 'zustand'


const useDataStore = create((set, get) => ({
    playlists: null,
    currentPlaylistId: null,
    tracks: null,
    trackIdx: 0,
    error: null,


    // playlists
    setPlaylists: (newPlaylists) => set(() => ({playlists: newPlaylists})),
    setCurrentPlaylistId: playlistId => set(() => ({currentPlaylistId: playlistId})),


    // tracks
    setTracks: (newTracks) => set(() => ({tracks: newTracks})),
    getTrackById: id => get().tracks.find(track => track.track_id === id),


    // track order
    getTrackOrder: () => get().playlists.find(playlist => get().currentPlaylistId === playlist._id).track_order,


    // 
    isLoading: () => get().tracks === null ? true : false
}))


export default useDataStore