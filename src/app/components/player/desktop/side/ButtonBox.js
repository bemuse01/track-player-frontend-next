// libs
import { useState } from 'react'

// hoos
import useUpdate from '@/hooks/useUpdate'

// components
import ReloadButton from '@/components/controlButton/ReloadButton'


const ButtonBox = ({color}) => {
    const buttonBoxClass = 'button-box aspect-square h-auto pl-[2px] pt-[4px] relative flex justify-center items-center'


    // reload
    const [isReloading, setIsReloading] = useState(false)
    const onSuccessReload = (newData) => {
        console.log(newData)
        setIsReloading(false)
    }
    const updateTrigger = useUpdate(onSuccessReload)
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