const Message = ({msg}) => {
    const messageClass = 'message w-auto h-auto p-[6px] bg-green-500 rounded-xl'


    return (
        <div
            className={messageClass}
        >

            <span>{msg}</span>

        </div>
    )
}


export default Message