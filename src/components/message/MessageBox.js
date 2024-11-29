// import ButtonBox from './ButtonBox'
import { AnimatePresence, motion } from 'framer-motion'
import Message from './Message'
import useDataStore from '@/store/dataStore'


const MessageBox = () => {
    // store
    const messages = useDataStore(state => state.messages)


    // message box
    const messageBoxClass = 'message w-auto h-auto m-[10px] flex flex-col gap-[4px] text-[14px] text-white'


    // message
    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
            }
        }
    }
    

    return (
        <div
            className={messageBoxClass}
        >

            <AnimatePresence>

                {
                    messages.map(({id, message}) => (
                        <motion.div
                            exit="exit"
                            variants={variants}
                            key={id}
                        >
        
                            <Message msg={message} />
        
                        </motion.div>
                    ))
                }

            </AnimatePresence>

        </div>
    )
}


export default MessageBox