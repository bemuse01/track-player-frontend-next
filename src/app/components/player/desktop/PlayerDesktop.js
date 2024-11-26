import PlayerBody from './PlayerBody'


const PlayerDesktop = () => {
    const playerDesktopClass = 'player-desktop w-full h-full absolute overflow-hidden'


    return(
        <div
            className={playerDesktopClass}
        >

            <PlayerBody />

        </div>
    )
}


export default PlayerDesktop