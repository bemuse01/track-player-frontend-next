import { create } from 'zustand'
import Player from '@/utils/player'
import { clamp } from '@/utils/math'


const usePlayerStore = create((set, get) => ({
    player: null,
    isLoaded: false,
    isPlaying: false,
    isLoop: false,
    idx: 0,
    direction: 1,
    duration: 0,
    currentTime: 0,


    // player
    setPlayer: tracks => set(() => ({player: new Player({set, get, tracks})})),
    play: () => get().player.play(),
    pause: () => get().player.pause(),
    change: src => get().player.change(src),
    setVolume: volume => get().player.setVolume(volume),
    getVolume: () => get().player.getVolume(),
    setCurrentTime: (time) => get().player.setCurrentTime(time),
    getCurrentTime: () => get().player.getCurrentTime(),
    getDuration: () => get().player.getDuration(),
    toggleLoop: () => get().player.toggleLoop(),
    dispose: () => get().player?.dispose(),


    // idx
    setIdx: (newIdx) => set(() => ({idx: newIdx})),
    increaseIdx: (max) => set(state => ({idx: clamp(state.idx + 1, 0, max)})),
    decreaseIdx: (max) => set(state => ({idx: clamp(state.idx - 1, 0, max)})),


    // direction
    setDirection: (newDirection) => set({direction: newDirection})
}))


export default usePlayerStore