import { useMemo } from 'react'


const useTime = (time) => {
    const newTime = useMemo(() => {
        if(time === null) return '00:00'
        else{
            const rmin = ~~(time / 60)
            const rsec = ~~(time % 60)

            const min = rmin < 10 ? '0' + rmin : rmin
            const sec = rsec < 10 ? '0' + rsec : rsec

            return min + ':' + sec
        }
    }, [time])

    return newTime
}


export default useTime