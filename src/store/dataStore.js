import { create } from 'zustand'
import defaultThumb from '@/public/images/default.jpg'
import _ from 'lodash'


const useDataStore = create((set, get) => ({
    playlists: [],
    currentPlaylistId: '',
    tracks: [],
    trackIdx: 0,
    error: null,
    messages: [],
    thumbnailUrl: defaultThumb.src,
    audioUrl: '',
    maxPlaylistCount: 0,


    // playlists
    setPlaylists: (newPlaylists) => set(() => ({playlists: newPlaylists})),
    setCurrentPlaylistId: playlistId => set(() => ({currentPlaylistId: playlistId})),
    addPlaylists: (newPlaylists) => set((state) => ({playlists: _.unionWith(state.playlists, newPlaylists, (x, y) => x.playlist_id === y.playlist_id)})),
    setMaxPlaylistCount: (count) => set(() => ({maxPlaylistCount: count})),


    // tracks
    setTracks: (newTracks) => set(() => ({tracks: newTracks})),
    getTrackById: id => get().tracks.find(track => track.track_id === id),
    addTracks: (newTracks) => set((state) => ({tracks: _.unionWith(state.tracks, newTracks, (x, y) => x.track_id === y.track_id)})),


    // track order
    getTrackOrder: () => get().playlists.find(playlist => get().currentPlaylistId === playlist.playlist)?.track_order,


    // message
    setMessages: (newMessages) => set(() => ({messages: newMessages})),
    addMessage: (newMessage) => set((state) => ({messages: [...state.messages, newMessage]})),
    removeMessage: () => set((state) => ({messages: state.messages.slice(1, state.messages.length)})),
    removeMessageById: id => set((state) => ({messages: state.messages.filter(message => message.id !== id)})),


    // thumbnail
    setThumbnailUrl: (url) => set(() => ({thumbnailUrl: url})),


    // audio
    setAudioUrl: (url) => set(() => ({audioUrl: url})),


    // 
    isLoading: () => get().tracks === null ? true : false
}))


export default useDataStore