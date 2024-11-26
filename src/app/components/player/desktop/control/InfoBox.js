// libs
import { useEffect, useState } from 'react' 

// store
import useDataStore from '@/store/dataStore'

// hooks
import useColor from '@/hooks/useColor'
import useMainData from '@/hooks/useMainData'


const InfoBox = () => {
    // store
    const {tracks, idx} = useMainData()
    const {getTrackById, getTrackOrder} = useDataStore()
    const {color} = useColor({tracks, idx})


    // info
    const infoBoxClass = 'info-box w-full relative h-auto mb-[4px]'
    const infoBoxStyle = {
        color
    }
    const infoClass = 'info w-full h-auto relative flex flex-col px-[6px]'


    // title
    const titleClass = 'h-auto text-[30px] max-lg:text-[26px] max-md:text-[22px] text-center'
    const [title, setTitle] = useState()


    // artist
    const artistClass = 'h-auto text-[20px] max-lg:text-[18px] max-md:text-[16px] text-center'
    const [artist, setArtist] = useState()


    const setInfo = (title, artist) => {
        if(title || artist){

            setTitle(title)
            setArtist(artist)

        }else{

            const trackOrder = getTrackOrder()
            const id = trackOrder[idx]
            const {title: newTitle, artist: newArtist} = getTrackById(id)
            setTitle(newTitle)
            setArtist(newArtist)

        }
    }

    useEffect(() => {
        if(tracks !== null){

            setInfo()

        }
    }, [tracks, idx])


    return(
        <div
            className={infoBoxClass}
            style={infoBoxStyle}
        >

            <div
                className={infoClass}
            >

                <div
                    className={titleClass}
                >
                    <p>{title}</p>
                </div>

                <div
                    className={artistClass}
                >
                    <p>{artist}</p>
                </div>

            </div>

        </div>
    )
}

export default InfoBox