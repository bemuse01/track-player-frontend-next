// libs
import Image from 'next/image'

// store
import usePlayerStore from '@/store/playerStore'

// components
import ImageComp from '@/components/image/ImageComp'

// etc
import Vinyl from '@/public/images/vinyl.png'
import VinylOverlay from '@/public/images/vinyl_overlay.png'


const VinylImage = ({url, w, h, color}) => {
    const isPlaying = usePlayerStore(state => state.isPlaying)

    const vinylImageClass = 'vinyl-image relative flex justify-center items-center'
    const vinylImageStyle = {
        width: w,
        height: h,
        border: `14px solid ${color}`,
        borderRadius: '50%'
    }

    const vinylAnimClass = 'w-full h-full flex justify-center items-center absolute'
    const vinylAnimStyle = {
        animation: `rotating 24s linear infinite ${isPlaying ? 'running' : 'paused'}`
    }

    const thumbClass = 'w-[50%] h-[50%] absolute rotate-[-180deg]'

    const vinylRawClass = 'w-full h-full absolute'

    const vinylOverlayClass = 'w-full h-full mix-blend-overlay absolute scale-[0.99] rotate-[90deg]'


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
                    <ImageComp url={url} />
                </div>

                <div
                    className={vinylRawClass}
                >
                    <Image
                        fill
                        sizes="(max-width: 768px) 100vmax, 50vmax"
                        src={Vinyl}
                        alt='vinyl'
                        priority={true}
                        draggable={false}
                    />
                </div>

            </div>

            <div
                className={vinylOverlayClass}
            >
                <Image
                    fill
                    sizes="(max-width: 768px) 100vmax, 50vmax"
                    src={VinylOverlay}
                    alt='vinyl overlay'
                    priority={true}
                    draggable={false}
                />
            </div>

        </div>
    )
}


export default VinylImage