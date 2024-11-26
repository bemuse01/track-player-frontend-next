// hooks
import useMainData from '@/hooks/useMainData'
import useColor from '@/hooks/useColor'

// etc
import { PLAYER_BORDER_VALUE_2 } from '@/config/style'


const BgBox = () => {
    // store
    const {tracks, idx} = useMainData()
    const {originalColor} = useColor({tracks, idx})


    // bg box
    const bgBoxClas = 'bg-wrap w-full h-full absolute overflow-hidden'
    const bgBoxStyle = {
        background: originalColor,
        borderRadius: `${PLAYER_BORDER_VALUE_2}px`
    }


    return(
        <div
            className={bgBoxClas}
            style={bgBoxStyle}
        >
        </div>
    )
}


export default BgBox