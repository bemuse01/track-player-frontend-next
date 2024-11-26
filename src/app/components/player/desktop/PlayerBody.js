// import PlayerBox from './PlayerBox'
// import ThumbWrap from './ThumbWrap'
// import ControlWrap from './ControlWrap'
// import RecordWrap from './RecordWrap'
// import ListWrap from './ListWrap'
// import BgWrap from './BgWrap'
import BgBox from './bg/bgBox'
import ControlBox from './control/ControlBox'
import SideBox from './side/SideBox'
import ThumbBox from './thumbnail/ThumbBox'
import VinylBox from './vinyl/VinylBox'


const PlayerBody = () => {
    // player body
    const playerBodyClass = 'player-body w-screen h-screen absolute flex justify-center items-center'


    // player box
    const playerBoxClass = 'player-box w-[540px] max-lg:w-[470px] max-md:w-[400px] aspect-square relative drop-shadow-[0_0_20px_rgba(0,0,0,0.35)]'


    return(
        <div
            className={playerBodyClass}
        >

            <div
                className={playerBoxClass}
            >

                <VinylBox />

                <SideBox />

                <BgBox />

                <ThumbBox />

                <ControlBox />

            </div>

        </div>
    )
}


export default PlayerBody