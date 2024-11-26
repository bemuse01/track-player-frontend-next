const PauseShape = ({color}) => {
    return(
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
        >

            <path 
                d="M 70 0 L 80 0 C 85.52284749830794 3.381768755490889e-16 90 4.477152501692067 90 10 L 90 90 C 90 95.52284749830794 85.52284749830794 100 80 100 L 70 100 C 64.47715250169206 100 60 95.52284749830794 60 90 L 60 10 C 60 4.477152501692068 64.47715250169206 1.0145306266472668e-15 70 0 Z M 20 0 L 30 0 C 35.52284749830793 3.381768755490889e-16 40 4.477152501692067 40 10 L 40 90 C 40 95.52284749830794 35.52284749830793 100 30 100 L 20 100 C 14.477152501692068 100 10 95.52284749830794 10 90 L 10 10 C 10 4.477152501692068 14.477152501692068 1.0145306266472668e-15 20 0 Z" 
                fill={color}
            />

        </svg>
    )
}


export default PauseShape
