// libs
import Image from 'next/image'

// components
import { ImageLoader, ImagePlaceholder } from '@/components/image'

// etc
import Vinyl from '@/public/images/vinyl.png'
import VinylOverlay from '@/public/images/vinyl_overlay.png'
import { VINYL_PLACEHOLDER_COLOR } from '@/config/style'


const VinylImage = ({url, w, h}) => {
    const vinylImageClass = 'vinyl-image relative flex justify-center items-center'
    const vinylImageStyle = {
        width: w,
        height: h,
    }

    const vinylAnimClass = 'w-full h-full flex justify-center items-center absolute rounded-full overflow-hidden'
    const vinylAnimStyle = {
        animation: 'rotating 15s linear infinite',
    }

    const thumbClass = 'w-[50%] h-[50%] absolute rotate-[-40deg] rounded-full overflow-hidden'

    const vinylRawClass = 'w-full h-full absolute'

    const vinylOverlayClass = 'w-full h-full mix-blend-overlay absolute rounded-full overflow-hidden'


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