import PlayerBody from './PlayerBody'


const PlayerMobile = () => {
    const playerDesktopClass = 'player-mobile w-full h-full absolute overflow-hidden'

    
    return(
        <div
            className={playerDesktopClass}
        >

            <PlayerBody />            

        </div>
    )
}


export default PlayerMobile