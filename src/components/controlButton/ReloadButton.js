import { Button } from '@/components/button'
import { ReloadShape } from '@/components/shape'
import { useMemo } from 'react'


const ReloadButton = ({scale, color, isReloading, pointerup}) => {
    const animation = useMemo(() => {
        return isReloading ? 'rotating 1.2s infinite linear' : 'none'
    }, [isReloading])
    const reloadButtonClass = 'reload-button aspect-square h-full flex justify-center items-center '
    const reloadButtonStyle = {
        animation
    }


    return(
        <div
            className={reloadButtonClass}
            style={reloadButtonStyle}
        >

            <Button
                scale={scale}
                pointerup={pointerup}
            >
                <ReloadShape color={color} />
            </Button>

        </div>
    )
}


export default ReloadButton