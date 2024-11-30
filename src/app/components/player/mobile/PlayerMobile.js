import useMobileHeight from '@/hooks/useMobileHeight'
import PlayerBody from './PlayerBody'


const PlayerMobile = () => {
    // store
    const height = useMobileHeight()


    // player mobile 
    const playerMobileClass = 'player-mobile w-full h-full absolute overflow-hidden'
    const playerMobileStyle = {
        height
    }

    
    return(
        <div
            className={playerMobileClass}
            style={playerMobileStyle}
        >

            <PlayerBody />            

        </div>
    )
}


export default PlayerMobile