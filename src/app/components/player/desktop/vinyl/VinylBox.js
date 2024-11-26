// components
import VinylWrapper from './VinylWrapper'


const VinylBox = () => {
    // vinyl box
    const vinylBoxClass = 'vinyl-box w-full h-full absolute'


    return(
        <div
            className={vinylBoxClass}
        >

            <VinylWrapper />

        </div>
    )
}


export default VinylBox