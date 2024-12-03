import { AnimatePresence, motion } from 'framer-motion'
import LoadingImage from '@/public/images/loading.gif'
import Image from 'next/image'


const Loader = ({isLoading}) => {
    const loaderClass = 'w-full h-full absolute'

    const imgClass = 'w-full h-full object-cover absolute'


    return(
        <AnimatePresence>
            
            {isLoading &&
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                    className={loaderClass}
                >
                    <Image
                        fill
                        sizes="(max-width: 768px) 100vmax, 50vmax"
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


export default Loader