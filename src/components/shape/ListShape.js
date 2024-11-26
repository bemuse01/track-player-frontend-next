const ListShape = ({color}) => {
    return(
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
        >
            
            <path 
                d="M 6 0 L 94 0 C 97.314 0 100 2.686 100 6 L 100 19 C 100 22.314 97.314 25 94 25 L 6 25 C 2.686 25 0 22.314 0 19 L 0 6 C 0 2.686 2.686 0 6 0 Z M 6 75 L 94 75 C 97.314 75 100 77.686 100 81 L 100 94 C 100 97.314 97.314 100 94 100 L 6 100 C 2.686 100 0 97.314 0 94 L 0 81 C 0 77.686 2.686 75 6 75 Z M 6 37.5 L 94 37.5 C 97.314 37.5 100 40.186 100 43.5 L 100 56.5 C 100 59.814 97.314 62.5 94 62.5 L 6 62.5 C 2.686 62.5 0 59.814 0 56.5 L 0 43.5 C 0 40.186 2.686 37.5 6 37.5 Z" 
                fill={color}
            />

        </svg>
    )
}


export default ListShape