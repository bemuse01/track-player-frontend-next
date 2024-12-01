import { useEffect, useState } from 'react'


const useMobileHeight = () => {
    const [height, setHeight] = useState(0)

    const onResize = () => {
        const h = window.innerHeight

        setHeight(h)
    }
    useEffect(() => {
        onResize()

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [])

    return height
}


export default useMobileHeight