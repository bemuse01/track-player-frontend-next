import { useState } from 'react'
import ImageDisplay from './ImageDisplay'
import ImageLoading from './ImageLoading'


const ImageComp = ({url}) => {
    // image comp
    const imageCompClass = 'image-comp w-full h-full overflow-hidden relative'


    // event
    const [isLoading, setIsLoading] = useState(true)
    const onLoad = () => {
        setIsLoading(false)
    }


    return(
        <div
            className={imageCompClass}
        >   

            <ImageDisplay url={url} onLoad={onLoad}/>

            <ImageLoading isLoading={isLoading} />

        </div>
    )
}


export default ImageComp