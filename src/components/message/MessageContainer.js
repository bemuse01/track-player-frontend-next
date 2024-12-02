import MessageBox from './MessageBox'


const MessageContainer = () => {
    const messageContClass = 'message-container w-full flex justify-center items-center absolute z-[99999] pointer-events-none opacity-[0.85]'
    

    return (
        <div
            className={messageContClass}
        >

            <MessageBox />

        </div>
    )
}


export default MessageContainer