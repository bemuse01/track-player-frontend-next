import { create } from 'zustand'
import { LIST_MENU } from '@/config/config'


const useStateStore = create((set, get) => ({
    isListOpen: false,
    isMobile: false,
    selectedListMenu: LIST_MENU.TRACK,


    // list
    toggleIsListOpen: () => set(state => ({isListOpen: !state.isListOpen})),


    // device
    setIsMobile: (newValue) => set(() => ({isMobile: newValue})),


    // list menu
    setSelectedListMenu: (newValue) => set(() => ({selectedListMenu: newValue}))
}))


export default useStateStore