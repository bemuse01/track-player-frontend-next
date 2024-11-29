// libs
import Image from 'next/image'

// components
import ImageComp from '@/components/image/ImageComp'

// etc
import Vinyl from '@/public/images/vinyl.png'
import VinylOverlay from '@/public/images/vinyl_overlay.png'


const VinylImage = ({url, w, h}) => {
    const vinylImageClass = 'vinyl-image relative flex justify-center items-center'
    const vinylImageStyle = {
        width: w,
        height: h,
    }

    const vinylAnimClass = 'w-full h-full flex justify-center items-center absolute'
    const vinylAnimStyle = {
        animation: 'rotating 15s linear infinite'
    }

    const thumbClass = 'w-[50%] h-[50%] absolute rotate-[-40deg]'

    const vinylRawClass = 'w-full h-full absolute'

    const vinylOverlayClass = 'w-full h-full mix-blend-overlay absolute'


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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={100}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
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