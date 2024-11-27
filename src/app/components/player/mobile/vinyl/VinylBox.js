// components
import VinylWrapper from './VinylWrapper'


const VinylBox = () => {
    // vinyl box
    const vinylBoxClass = 'vinyl-box w-full flex-1 relative flex items-center justify-center'


    return(
        <div
            className={vinylBoxClass}
        >

            <VinylWrapper />

        </div>
    )
}


export default VinylBox