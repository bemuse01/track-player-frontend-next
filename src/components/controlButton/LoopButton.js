import { Button } from '@/components/button'
import { LoopShape, UnloopShape } from '@/components/shape'


const LoopButton = ({scale, color, pointerup, isLoop}) => {
    const loopButtonClass = 'control-loop-button aspect-square h-full flex justify-center items-center pl-[2px]'

    // button
    const buttonClass = [
        'w-full',
        'h-full',
        // 'scale-[0.8]'
    ].join(' ')


    return(
        <div
            className={loopButtonClass}
        >

            <Button
                className={buttonClass}
                scale={scale}
                pointerup={pointerup}
            >
                {
                    isLoop ?
                    <LoopShape color={color} />
                    :
                    <UnloopShape color={color} />
                }
            </Button>

        </div>
    )
}


export default LoopButton