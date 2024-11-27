// store
import usePlayerStore from '@/store/playerStore'
import useStateStore from '@/store/stateStore'

// hooks
import useColor from '@/hooks/useColor'
import useMainData from '@/hooks/useMainData'

// components
import { PlayButton, NextButton, PrevButton, ListButton, LoopButton } from '@/components/controlButton'
import ButtonWrapper from './ButtonWrapper'


const ButtonBox = () => {
    // store
    const {tracks, idx} = useMainData()
    const {play, pause, increaseIdx, decreaseIdx, setDirection, toggleLoop} = usePlayerStore()
    const isLoop = usePlayerStore(state => state.isLoop)
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const isLoaded = usePlayerStore(state => state.isLoaded)
    const {toggleIsListOpen} = useStateStore()
    

    // main color
    const {color} = useColor({tracks, idx})


    // button box
    const buttonBoxClass = 'button-box w-full flex flex-row relative gap-[2.5%] h-[45px]'
    const buttonBoxStyle = {
        color
    }


    // button event
    const playMusic = () => {
        if(!isLoaded) return
        if(isPlaying) pause()
        else play()
    }
    const prevMusic = () => {
        if(idx === 0) return
        pause()
        decreaseIdx(tracks.length - 1)
        setDirection(-1)
    }
    const nextMusic = () => {
        if(idx === tracks.length - 1) return
        pause()
        increaseIdx(tracks.length - 1)
        setDirection(1)
    }
    const openList = () => {
        toggleIsListOpen()
    }
    const loopMusic = () => {
        toggleLoop()
    }


    return(
        <div
            className={buttonBoxClass}
            style={buttonBoxStyle}
        >

            <ButtonWrapper className={'flex-row'}>
                <ListButton scale={0.54} color={color} pointerup={openList} />
            </ButtonWrapper>
            
            <ButtonWrapper className={'justify-center items-center gap-[5%]'}>
                <PrevButton scale={0.58} color={color} pointerup={prevMusic} />
                <PlayButton scale={0.8} color={color} pointerup={playMusic} isPlaying={isPlaying} />
                <NextButton scale={0.58} color={color} pointerup={nextMusic} />
            </ButtonWrapper>

            <ButtonWrapper className={'flex-row-reverse'}>
                <LoopButton scale={0.8} color={color} pointerup={loopMusic} isLoop={isLoop}/>
            </ButtonWrapper>

        </div>
    )
}


export default ButtonBox