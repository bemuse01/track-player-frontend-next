// libs
import Image from 'next/image'

// store
import usePlayerStore from '@/store/playerStore'

// components
import { ImageLoader, ImagePlaceholder } from '@/components/image'

// etc
import Vinyl from '@/public/images/vinyl.png'
import VinylOverlay from '@/public/images/vinyl_overlay.png'
import { VINYL_PLACEHOLDER_COLOR } from '@/config/style'


const VinylImage = ({url, w, h, color}) => {
    const isPlaying = usePlayerStore(state => state.isPlaying)

    const vinylImageClass = 'vinyl-image relative flex justify-center items-center'
    const vinylImageStyle = {
        width: w,
        height: h,
        border: `12px solid ${color}`,
        borderRadius: '50%'
    }

    const vinylAnimClass = 'w-full h-full flex justify-center items-center absolute rounded-full overflow-hidden'
    const vinylAnimStyle = {
        animation: `rotating 24s linear infinite ${isPlaying ? 'running' : 'paused'}`
    }

    const thumbClass = 'w-[50%] h-[50%] absolute rotate-[-180deg] rounded-full overflow-hidden'

    const vinylRawClass = 'w-full h-full absolute'

    const vinylOverlayClass = 'w-full h-full mix-blend-overlay absolute rotate-[90deg] rounded-full overflow-hidden'


    return(
        <div
            className={vinylImageClass}
            style={vinylImageStyle}
        >

            <div
                className={vinylAnimClass}
                style={vinylAnimStyle}
            >

                <div
                    className={thumbClass}
                >
                    <ImageLoader url={url} />
                </div>

                <div
                    className={vinylRawClass}
                >
                    <ImagePlaceholder
                        url={Vinyl}
                        color={VINYL_PLACEHOLDER_COLOR}
                    />
                </div>

            </div>

            <div
                className={vinylOverlayClass}
            >
                <ImagePlaceholder
                    url={VinylOverlay}
                    color={VINYL_PLACEHOLDER_COLOR}
                />
            </div>

        </div>
    )
}


export default VinylImage