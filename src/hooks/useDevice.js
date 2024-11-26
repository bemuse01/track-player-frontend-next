import { useEffect } from 'react'
import { SM } from '@/config/viewport'


const useDevice = () => {
    const {setIsMobile} = useStateStore()

    const detectMobile = () => {
        const width = window.innerWidth

        if(width <= SM){

            setIsMobile(true)

        }else{

            setIsMobile(false)

        }
    }
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
    }, [])
}


export default useDevice