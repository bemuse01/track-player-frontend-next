const setBgColorByCode = (code) => {
    const letter = code?.toString()[0] || 999

    const green = ' bg-green-500'
    const orange = ' bg-orange-500'
    const red = ' bg-red-500'

    switch (letter) {
        case '2':
            return green
        case '4':
            return orange
        case '5':
            return red
        default:
            return red
    }
}

const Message = ({code, msg}) => {
    const messageClass = 'message w-auto h-auto p-[6px] rounded-xl'

    const bgColor = setBgColorByCode(code)

    return (
        <div
            className={messageClass + bgColor}
        >

            <span>{msg}</span>

        </div>
    )
}


export default Message