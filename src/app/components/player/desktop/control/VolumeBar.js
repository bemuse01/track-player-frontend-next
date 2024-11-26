import { useRef, useEffect, useState } from 'react'
import { Slider } from '@/components/slider'
import usePlayerStore from '@/store/playerStore'
import { clamp, normalize } from '@/utils/math'


const VolumeBar = ({color, setIsHoldingBar}) => {
    // store
    const {setVolume, getVolume} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    const volumeBarClass = 'volume-bar w-full h-full flex justify-center items-center absolute'


    // set volume
    const height = 4
    const hh = height / 2
    const thumbScale = 4
    const sliderRef = useRef(null)
    const [sliderValue, setSliderValue] = useState(0)
    const [thumbX, setThumbX] = useState(0)
    const isDraggable = useRef(false)
    const initVolumeBar = () => {
        const volume = getVolume()
        
        const {width} = sliderRef.current.getBoundingClientRect()

        const rawX = width * volume
        const clampedX = clamp(rawX, 0, width)
        const normalizedX = normalize(clampedX, -hh, width - hh, 0, width)

        setThumbX(normalizedX)
        setSliderValue(volume)
    }
    const calculate = (e) => {
        const {clientX} = e

        const {width, left} = sliderRef.current.getBoundingClientRect()

        const rawX = clientX - left
        const clampedX = clamp(rawX, 0, width)
        const normalizedX = normalize(clampedX, -hh, width - hh, 0, width)
        const normalizedValue = clampedX / width

        setThumbX(normalizedX)
        setSliderValue(normalizedValue)
        setVolume(normalizedValue)
    }
    const onMousedown = (e) => {
        e.preventDefault()

        isDraggable.current = true
        setIsHoldingBar(true)
    }
    const onMouseup = (e) => {
        e.preventDefault()

        isDraggable.current = false
        setIsHoldingBar(false)
    }
    const onMousemove = (e) => {
        e.preventDefault()

        if(!isDraggable.current) return
        if(sliderRef.current === null) return

        calculate(e)
    }
    const onClick = (e) => {
        e.preventDefault()

        if(sliderRef.current === null) return

        calculate(e)
    }

    useEffect(() => {
        if(player !== null){

            initVolumeBar()

        }
    }, [player])


    // init
    const init = () => {
        document.addEventListener('pointerup', onMouseup)
        document.addEventListener('pointermove', onMousemove)
    }
    const onUnmount = () => {
        document.removeEventListener('pointerup', onMouseup)
        document.removeEventListener('pointermove', onMousemove)
    }
    useEffect(() => {
        init()

        return () => onUnmount()
    }, [])


    return(
        <div
            className={volumeBarClass}
        >

            <Slider 
                color={color} 
                height={height} 
                thumbX={thumbX}
                thumbScale={thumbScale} 
                sliderRef={sliderRef} 
                sliderValue={sliderValue}
                pointerdown={onMousedown} 
                pointerup={onClick}
            />

        </div>
    )
}


export default VolumeBar