import { Button } from '@/components/button'
import { PlayShape, PauseShape } from '@/components/shape'


const PlayButton = ({scale, color, pointerup, isPlaying}) => {
    const playButtonClass = 'control-play-button aspect-square h-full flex justify-center items-center pl-[2px]'


    return(
        <div
            className={playButtonClass}
        >

            <Button
                scale={scale}
                pointerup={pointerup}
            >
                {
                    isPlaying ?
                    <PauseShape color={color} />
                    :
                    <PlayShape color={color} />
                }
            </Button>

        </div>
    )
}


export default PlayButton