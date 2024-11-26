import Image from 'next/image'


const ImageDisplay = ({url, onLoad = () => {}}) => {
    const ImageDisplayClass = 'w-full h-full object-cover absolute'

    
    return(
        <Image
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={ImageDisplayClass}
            src={url}
            alt='thumbnail'
            priority={true}
            onLoad={onLoad}
            draggable={false}
        />
    )
}


export default ImageDisplay