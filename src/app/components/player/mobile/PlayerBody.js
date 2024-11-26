// import PlayerBox from './PlayerBox'
// import ThumbWrap from './ThumbWrap'
// import ControlWrap from './ControlWrap'
// import RecordWrap from './RecordWrap'
// import ListWrap from './ListWrap'
// import BgWrap from './BgWrap'


const PlayerBody = () => {
    // player body
    const playerBodyClass = 'player-body w-screen h-screen absolute flex justify-center items-center'


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

            </div>

        </div>
    )
}


export default PlayerBody