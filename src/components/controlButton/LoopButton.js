import { Button } from '@/components/button'
import { LoopShape, UnloopShape } from '@/components/shape'


const LoopButton = ({scale, color, pointerup, isLoop}) => {
    const loopButtonClass = 'control-loop-button aspect-square h-full flex justify-center items-center pl-[2px]'


    return(
        <div
            className={loopButtonClass}
        >

            <Button
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