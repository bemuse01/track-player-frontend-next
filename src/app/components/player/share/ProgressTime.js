// store
import usePlayerStore from '@/store/playerStore'

// hooks
import useTime from '@/hooks/useTime'


const ProgressTime = ({fontSize, color}) => {
    const progressTimeClass = 'progress-time w-full h-auto flex flex-row'
    const progressTimeStyle = {
        color,
        fontSize
    }


    // current time
    const currentTimeClass = 'flex-1 flex flex-row'
    const currentTime = usePlayerStore(state => state.currentTime)
    const displayCurrentTime = useTime(currentTime)


    // duration
    const durationClass = 'flex-1 flex flex-row-reverse'
    const duration = usePlayerStore(state => state.duration)
    const displayDuration = useTime(duration)

    
    return(
        <div
            className={progressTimeClass}
            style={progressTimeStyle}
        >

            <div
                className={currentTimeClass}
            >
                <span>
                    {displayCurrentTime}
                </span>
            </div>

            <div
                className={durationClass}
            >
                <span>
                    {displayDuration}
                </span>
            </div>

        </div>
    )
}

export default ProgressTime