import { PLAYER_BORDER_VALUE } from '@/config/style'
import ButtonBox from './ButtonBox'
import InfoBox from './InfoBox'
import ProgressBox from './ProgressBox'


const ControlBox = () => {
    const controlBoxClass = 'control-box w-full absolute h-auto bottom-0 overflow-hidden bg-white'
    const controlBoxStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }

    const controlWrapperClass = 'w-full h-auto relative p-[8px] flex flex-col gap-[8px]'


    return(
        <div
            className={controlBoxClass}
            style={controlBoxStyle}
        >

            <div
                className={controlWrapperClass}
            >

                <InfoBox />

                <ProgressBox />

                <ButtonBox />

            </div>

        </div>
    )
}


export default ControlBox