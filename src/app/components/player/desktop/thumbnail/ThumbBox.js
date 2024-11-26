// components
import ThumbImage from './ThumbImage'

// etc
import { PLAYER_BORDER_VALUE_2 } from '@/config/style'


const ThumbBox = () => {
    // thumb box
    const thumbBoxClass = 'thumb-box w-full h-full absolute overflow-hidden'
    const thumbBoxStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE_2}px`
    }


    return(
        <div
            className={thumbBoxClass}
            style={thumbBoxStyle}
        >

            <ThumbImage />
            
        </div>
    )
}


export default ThumbBox