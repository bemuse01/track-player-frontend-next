import { useState } from 'react'
import Display from './Display'
import Placeholder from './Placeholder'


const ImagePlaceholder = ({url, color}) => {
    // image placeholder
    const imagePlaceClass = 'image-placeholder w-full h-full overflow-hidden relative'


    // event
    const [isLoading, setIsLoading] = useState(true)
    const onLoad = () => {
        setIsLoading(false)
    }


    return(
        <div
            className={imagePlaceClass}
        >   

            <Display url={url} onLoad={onLoad}/>

            <Placeholder isLoading={isLoading} color={color}/>

        </div>
    )
}


export default ImagePlaceholder