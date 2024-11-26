const ButtonWrapper = ({className, children}) => {
    const buttonWrapperClass = 'button-wrapper h-full flex flex-1 ' + className

    return(
        <div
            className={buttonWrapperClass}
        >
            {children}
        </div>
    )
}


export default ButtonWrapper