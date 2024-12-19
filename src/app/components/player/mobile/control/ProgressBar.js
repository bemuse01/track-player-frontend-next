// libs
import { useRef, useEffect, useState } from 'react'

// store
import usePlayerStore from '@/store/playerStore'

// components
import { Slider } from '@/components/slider'

// etc
import { clamp, normalize } from '@/utils/math'


const ProgressBar = ({color, idx}) => {
    // store
    const {setCurrentTime, getCurrentTime, getDuration, isLoaded} = usePlayerStore()
    const player = usePlayerStore(state => state.player)


    // progress
    const progressBarClass = 'progress-bar w-full h-auto flex justify-center items-center py-[6px]'

    const height = 4
    const hh = height / 2
    const thumbScale = 4
    const sliderRef = useRef(null)
    const [sliderValue, setSliderValue] = useState(0)
    const [thumbX, setThumbX] = useState(-hh)
    const isDraggable = useRef(false)
    const initValue = () => {
        setSliderValue(0)
        setThumbX(-hh)
    }
    const calculate = (e) => {
        const {clientX} = e

        const {width, left} = sliderRef.current.getBoundingClientRect()
        const rawX = clientX - left
        const clampedX = clamp(rawX, 0, width)
        const normalizedX = normalize(clampedX, -hh, width - hh, 0, width)

        const normalizedValue = clampedX / width
        
        const currentTime = getDuration() * normalizedValue

        setThumbX(normalizedX)
        setSliderValue(normalizedValue)
        setCurrentTime(currentTime)
    }
    const update = () => {
        if(sliderRef.current === null) return

        const currentTime = getCurrentTime()
        const duration = getDuration()
        const normalizedValue = currentTime / duration

        const {width} = sliderRef.current.getBoundingClientRect()
        const rawX = width * normalizedValue
        const normalizedX = normalize(rawX, -hh, width - hh, 0, width)

        setThumbX(normalizedX)
        setSliderValue(normalizedValue)
    }
    const onTouchstart = (e) => {
        // e.preventDefault()

        isDraggable.current = true
    }
    const onTouchend = (e) => {
        // e.preventDefault()

        isDraggable.current = false
    }
    const onTouchmove = (e) => {     
        e.preventDefault()

        if(!isDraggable.current) return
        if(sliderRef.current === null) return

        calculate(e)
    }
    const onTouch = (e) => {
        e.preventDefault()

        if(sliderRef.current === null) return

        calculate(e)
    }

    useEffect(() => {
        initValue()
    }, [idx])


    // on render
    const raf = useRef(null)
    const animate = () => {
        update()

        raf.current = requestAnimationFrame(animate)
    }
    const init = () => {
        document.addEventListener('touchend', onTouchend)
        document.addEventListener('touchmove', onTouchmove, {passive: true})
    }
    const onUnmount = () => {
        document.removeEventListener('touchend', onTouchend)
        document.removeEventListener('touchmove', onTouchmove, {passive: true})
    }
    useEffect(() => {
        init()

        return () => onUnmount()
    }, [])
    useEffect(() => {
        if(player !== null) animate()

        return () => cancelAnimationFrame(raf.current)
    }, [player])


    return(
        <div
            className={progressBarClass}
        >

            <Slider 
                color={color} 
                height={height} 
                thumbX={thumbX}
                thumbScale={thumbScale} 
                sliderRef={sliderRef} 
                sliderValue={sliderValue}
                pointerdown={onTouchstart} 
                pointerup={isLoaded ? onTouch : () => {}}
            />

        </div>
    )
}


export default ProgressBar