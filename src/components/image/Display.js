import Image from 'next/image'


const Display = ({url, onLoad = () => {}}) => {
    const ImageDisplayClass = 'w-full h-full object-cover absolute'

    
    return(
        <Image
            fill
            unoptimized
            // sizes="(max-width: 768px) 100vmax, 50vmax"
            // sizes="720px"
            className={ImageDisplayClass}
            src={url}
            alt='display'
            priority={true}
            onLoad={onLoad}
            draggable={false}
        />
    )
}


export default Display