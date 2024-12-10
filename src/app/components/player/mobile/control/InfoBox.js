// hooks
import useColor from '@/hooks/useColor'
import useMainData from '@/hooks/useMainData'
import useInfo from '@/hooks/useInfo'


const InfoBox = () => {
    // store
    const {tracks, idx} = useMainData()


    // hooks
    const {title, artist} = useInfo()
    const {color} = useColor({tracks, idx})


    // info
    const infoBoxClass = 'info-box w-full relative h-auto mb-[4px]'
    const infoBoxStyle = {
        color
    }
    const infoClass = 'info w-full h-auto relative flex flex-col px-[6px]'


    // title
    const titleClass = 'h-auto text-[30px] text-center'


    // artist
    const artistClass = 'h-auto text-[20px] text-center'


    return(
        <div
            className={infoBoxClass}
            style={infoBoxStyle}
        >

            <div
                className={infoClass}
            >

                <div
                    className={titleClass}
                >
                    <p>{title}</p>
                </div>

                <div
                    className={artistClass}
                >
                    <p>{artist}</p>
                </div>

            </div>

        </div>
    )
}

export default InfoBox