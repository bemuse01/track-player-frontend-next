// libs
import { useState } from 'react'

// hoos
import useUpdate from '@/hooks/useUpdate'

// components
import ReloadButton from '@/components/controlButton/ReloadButton'


const ButtonBox = ({color}) => {
    const buttonBoxClass = 'button-box aspect-square h-auto pt-[4px] p-[2px] relative flex justify-center items-center'


    // reload
    const [isReloading, setIsReloading] = useState(false)
    const onErrorUpdate = () => {
        console.log('update error')
        setIsReloading(false)
    } 
    const onSuccessUpdate = (data) => {
        // console.log(newData)
        setIsReloading(false)
    }
    const updateTrigger = useUpdate(onSuccessUpdate, onErrorUpdate)
    const onClickReload = () => {
        if(isReloading) return

        setIsReloading(true)
        updateTrigger()
    }


    return(
        <div
            className={buttonBoxClass}
        >

            <ReloadButton scale={0.75} color={color} isReloading={isReloading} pointerup={onClickReload} />

        </div>
    )
}


export default ButtonBox