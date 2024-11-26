import { Button } from '@/components/button'
import { NextShape } from '@/components/shape'


const PrevButton = ({scale, color, pointerup}) => {
    const prevButtonClass = 'control-prev-button aspect-square h-full flex justify-center items-center scale-x-[-1]'

    // button
    const buttonClass = [
        'w-full',
        'h-full',
        // 'scale-x-[-0.58]',
        // 'scale-y-[0.58]'
    ].join(' ')


    return(
        <div
            className={prevButtonClass}
        >

            <Button
                className={buttonClass}
                scale={scale}
                pointerup={pointerup}
            >
                <NextShape color={color} />
            </Button>

        </div>
    )
}


export default PrevButton