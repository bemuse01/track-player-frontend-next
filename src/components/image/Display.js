import Image from 'next/image'


const Display = ({url, onLoad = () => {}}) => {
    const ImageDisplayClass = 'w-full h-full object-cover absolute'

    
    return(
        <Image
            fill
            sizes="(max-width: 768px) 100vmax, 50vmax"
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