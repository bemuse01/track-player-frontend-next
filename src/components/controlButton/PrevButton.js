import { Button } from '@/components/button'
import { NextShape } from '@/components/shape'


const PrevButton = ({scale, color, pointerup}) => {
    const prevButtonClass = 'control-prev-button aspect-square h-full flex justify-center items-center scale-x-[-1]'


    return(
        <div
            className={prevButtonClass}
        >

            <Button
                scale={scale}
                pointerup={pointerup}
            >
                <NextShape color={color} />
            </Button>

        </div>
    )
}


export default PrevButton