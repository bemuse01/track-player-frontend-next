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
    const playerBoxClass = 'player-box w-[540px] max-lg:w-[470px] max-md:w-[400px] aspect-square relative drop-shadow-[0_0_20px_rgba(0,0,0,0.35)]'


    return(
        <div
            className={playerBodyClass}
        >

            <div
                className={playerBoxClass}
            >

                {/* <RecordWrap />

                <ListWrap />

                <BgWrap />

                <ThumbWrap />

                <ControlWrap /> */}

            </div>

        </div>
    )
}


export default PlayerBody