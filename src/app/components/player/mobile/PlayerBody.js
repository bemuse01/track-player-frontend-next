// import PlayerBox from './PlayerBox'
// import ThumbWrap from './ThumbWrap'
// import ControlWrap from './ControlWrap'
// import RecordWrap from './RecordWrap'
// import ListWrap from './ListWrap'
// import BgWrap from './BgWrap'
// 
import useStateStore from '@/store/stateStore'
import ControlBox from './control/ControlBox'
import SideBox from './side/SideBox'
import VinylBox from './vinyl/VinylBox'


const PlayerBody = () => {
    // store
    const isListOpen = useStateStore(state => state.isListOpen)

    // player body
    const playerBodyClass = 'player-body w-full h-full absolute flex justify-center items-center bg-white'


    // player box
    const playerBoxClass = 'player-box w-full h-full relative flex flex-col items-center'


    return(
        <div
            className={playerBodyClass}
        >

            <div
                className={playerBoxClass}
            >
                
                {/* <BgWrap />

                {!isListOpen && 
                    <div 
                        className={playerWrapperClass}
                    >

                        <RecordWrap />

                        <ThumbWrap />

                    </div>
                }
                
                <ControlWrap />
                    
                {isListOpen && 
                    <div
                        className={listWrapperClass}
                    >

                        <ListWrap />

                    </div>
                } */}

                { !isListOpen && <VinylBox /> }

                { isListOpen && <SideBox /> }

                <ControlBox />

            </div>

        </div>
    )
}


export default PlayerBody