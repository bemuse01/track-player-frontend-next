const Button = ({pointerup, scale, children}) => {
    const buttonClass = 'w-full h-full cursor-pointer duration-300 md:hover:opacity-[0.6] focus:opacity-[0.6] active:opacity-[0.6]'
    const buttonStyle = {
        transform: `scale(${scale})`
    }

    return(
        <div
            className={buttonClass}
            style={buttonStyle}
            onPointerUp={pointerup}
        >
            {children}
        </div>
    )
}

export default Button