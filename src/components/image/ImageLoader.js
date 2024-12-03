import { useState } from 'react'
import Display from './Display'
import Loader from './Loader'


const ImageLoader = ({url}) => {
    // image loader
    const imageLoaderClass = 'image-loader w-full h-full overflow-hidden relative'


    // event
    const [isLoading, setIsLoading] = useState(true)
    const onLoad = () => {
        setIsLoading(false)
    }


    return(
        <div
            className={imageLoaderClass}
        >   

            <Display url={url} onLoad={onLoad}/>

            <Loader isLoading={isLoading} />

        </div>
    )
}


export default ImageLoader