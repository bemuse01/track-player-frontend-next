import { Button } from '@/components/button'
import { VolumeShape } from '@/components/shape'


const VolumeButton = ({scale, color, pointerup, mouseenter, mouseleave}) => {
    const volumeButtonClass = 'control-volume-button aspect-square h-full flex justify-center items-center'


    return(
        <div
            className={volumeButtonClass}
            onMouseEnter={() => mouseenter()}
            onMouseLeave={() => mouseleave()}
        >

            <Button
                scale={scale}
                pointerup={pointerup}
            >

                <VolumeShape color={color}/>

            </Button>

        </div>
    )
}


export default VolumeButton