import useStateStore from '@/store/stateStore'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'

const useLoad = () => {
    const {setLoadStats, setIsPageLoaded} = useStateStore()
    const loadStats = useStateStore(state => state.loadStats)
    
    const addLoadStat = (id) => {
        const isLoaded = false
        const newStat = {id, isLoaded}

        setLoadStats([...loadStats, newStat])
    }

    const updateLoadStats = (stat, id) => {
        const newStat = {...stat, isLoaded: true}
        return stat.id === id ? newStat : stat
    }
    const setLoadStatToDone = (id) => {
        // console.log(id)

        setLoadStats(loadStats.map(stat => updateLoadStats(stat, id)))
    }

    useEffect(() => {
        if(loadStats.length !== 0 && loadStats.every(stat => stat.isLoaded === true)){
            setIsPageLoaded(true)
        }
    }, [loadStats])


    return {addLoadStat, setLoadStatToDone}
}


export default useLoad