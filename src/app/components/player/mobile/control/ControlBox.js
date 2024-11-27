// components
import ButtonBox from './ButtonBox'
import InfoBox from './InfoBox'
import ProgressBox from './ProgressBox'


const ControlBox = () => {
    const controlBoxClass = 'control-box w-full h-auto overflow-hidden'

    const controlWrapperClass = 'w-full h-auto relative pb-[16px] pt-[8px] px-[8px] flex flex-col gap-[8px]'


    return(
        <div
            className={controlBoxClass}
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