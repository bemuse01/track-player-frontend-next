// hooks
import useColor from '@/hooks/useColor'
import useMainData from '@/hooks/useMainData'

// components
import ProgressBar from './ProgressBar'
import ProgressTime from '../../share/ProgressTime'


const ProgressBox = () => {
    // store
    const {tracks, idx} = useMainData()
    const {color} = useColor({tracks, idx})

    const progressBoxClass = 'progress-box w-full h-auto relative'

    const progressWrapperClass = 'progress-wrapper w-full h-auto flex flex-col px-[3%]'

    const fontSize = '12px'


    return(
        <div
            className={progressBoxClass}
        >

            <div
                className={progressWrapperClass}
            >

                <ProgressBar color={color} idx={idx} />
                <ProgressTime fontSize={fontSize} color={color} />

            </div>

        </div>
    ) 
}


export default ProgressBox