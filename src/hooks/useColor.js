import { useMemo, useEffect, useState, useCallback } from 'react'
import { BRIGHTNESS_THRESHOLD_WHITE, BRIGHTNESS_THRESHOLD_BLACK, DEFAULT_COLOR, DEFAULT_COLOR_2 } from '@/config/style'
import { getBrightness } from '@/utils/color'
import useDataStore from '@/store/dataStore'
import useTrackOrder from './useTrackOrder'


const useColor = ({tracks, idx}) => {
    // store
    const {getTrackById} = useDataStore()


    // hooks
    const trackOrder = useTrackOrder()


    const [color, setColor] = useState(DEFAULT_COLOR)
    const setColorByData = useCallback(() => {
        const id = trackOrder[idx]

        if(!id) return

        const track = getTrackById(id)
        const main_color = track?.main_color
        const newColor = '#' + main_color
        setColor(newColor)
    }, [trackOrder, idx])
    
    const newColor = useMemo(() => {
        const bright = getBrightness(color)

        if(bright < BRIGHTNESS_THRESHOLD_WHITE) return color
        else return DEFAULT_COLOR
    }, [color])

    const newColor2 = useMemo(() => {
        const bright = getBrightness(color)

        if(bright < BRIGHTNESS_THRESHOLD_BLACK) return DEFAULT_COLOR_2
        else return color
    }, [color])


    useEffect(() => {

        if(tracks.length !== 0){
            setColorByData()
        }
        
    }, [tracks, setColorByData])
    

    return {color: newColor, color2: newColor2, originalColor: color}
}


export default useColor