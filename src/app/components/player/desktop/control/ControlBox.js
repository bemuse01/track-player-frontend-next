import { PLAYER_BORDER_VALUE } from '@/config/style'
import ButtonBox from './ButtonBox'
import InfoBox from './InfoBox'
import ProgressBox from './ProgressBox'
import useMainData from '@/app/hooks/useMainData'


const ControlWrap = () => {
    // store
    const {tracks, idx, player} = useMainData()


    // 
    const controlWrapClass = [
        'control-wrap',
        'w-full',
        'absolute',
        'h-auto',
        'bottom-0',
        'overflow-hidden',
        'bg-white',
    ].join(' ')
    const controlWrapStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px`
    }

    const controlBoxClass = 'w-full h-auto relative p-[8px] flex flex-col gap-[8px]'


    return(
        <div
            className={controlWrapClass}
            style={controlWrapStyle}
        >

            <div
                className={controlBoxClass}
            >

                {/* <InfoBox tracks={tracks} idx={idx} />

                <ProgressBox tracks={tracks} idx={idx} />

                <ButtonBox tracks={tracks} idx={idx} player={player} /> */}

            </div>

        </div>
    )
}


export default ControlWrap