const NextShape = ({color}) => {
    return(
        <svg 
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
        >
            
            <path 
                d="M 55.675 30.463 C 72.35 43.488 72.35 56.514 55.675 69.539 L 25.014 93.488 C 8.337 106.513 0 100.001 0 73.951 L 0 26.052 C 0 0.001 8.337 -6.511 25.014 6.514 L 55.675 30.463 Z M 87.493 30.463 C 104.169 43.488 104.169 56.513 87.493 69.538 L 56.832 93.488 C 40.157 106.513 31.818 100 31.818 73.95 L 31.818 26.051 C 31.818 0 40.157 -6.513 56.832 6.513 L 87.493 30.463 Z" 
                fill={color}
            />

        </svg>
    )
}


export default NextShape