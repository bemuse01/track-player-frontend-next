import { create } from 'zustand'
import { LIST_MENU } from '@/config/config'


const updateLoadStats = (stat, id) => {
    const newStat = {...stat, isLoaded: true}
    return stat.id === id ? newStat : stat
}


const useStateStore = create((set, get) => ({
    isListOpen: false,
    isMobile: false,
    selectedListMenu: LIST_MENU.TRACK,
    loadStats: [],
    isPageLoaded: false,


    // list
    toggleIsListOpen: () => set(state => ({isListOpen: !state.isListOpen})),


    // device
    setIsMobile: (newValue) => set(() => ({isMobile: newValue})),


    // list menu
    setSelectedListMenu: (newValue) => set(() => ({selectedListMenu: newValue})),


    // load stat
    setLoadStats: (newStats) => set(() => ({loadStats: newStats})),
    setIsPageLoaded: (newValue) => set(() => ({isPageLoaded: newValue})),
}))


export default useStateStore