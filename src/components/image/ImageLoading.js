import { AnimatePresence } from 'framer-motion'
import LoadingImage from '@/public/images/loading.gif'


const ImageLoading = ({isLoading}) => {
    const imageLoadingClass = 'w-full h-full absolute'

    const imgClass = 'w-full h-full object-cover absolute'


    return(
        <AnimatePresence>
            
            {isLoading &&
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                    className={imageLoadingClass}
                >
                    <Image
                        className={imgClass}
                        alt='loading'
                        src={LoadingImage}
                        priority={true}
                        draggable={false}
                    />
                </motion.div>
            }

        </AnimatePresence>
    )
}


export default ImageLoading