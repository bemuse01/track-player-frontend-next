import { useEffect, useState } from 'react'
import { SM } from '@/config/viewport'


const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false)
    const detectMobile = () => {
        const width = window.innerWidth

        if(width <= SM){

            setIsMobile(true)

        }else{

            setIsMobile(false)

        }
    }


    // event
    const onResize = () => {
        detectMobile()
    }
    const init = () => {
        detectMobile()

        window.addEventListener('resize', onResize)
    }
    const onUnmount = () => {
        window.removeEventListener('resize', onResize)
    }
    useEffect(() => {
        init()

        return () => onUnmount() 
    })


    return isMobile
}


export default useDevice