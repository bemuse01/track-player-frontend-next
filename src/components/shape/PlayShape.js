const PlayShape = ({color}) => {
    return(
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
        >
            
            <path 
                d="M 78.491 30.463 C 100.503 43.488 100.503 56.513 78.491 69.538 L 38.018 93.488 C 16.006 106.513 5 100 5 73.95 L 5 26.051 C 5 0 16.006 -6.513 38.018 6.513 L 78.491 30.463 Z" 
                fill={color}
            />

        </svg>
    )
}


export default PlayShape