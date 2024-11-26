import { useState, useEffect } from 'react'
import { PLAYER_BORDER_VALUE } from '@/config/style'


const textToUpperCase = text => {
    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length)
}

const MenuItem = ({menuName, selectedListMenu, onClick = () => {}}) => {
    // menu item
    const [background, setBackground] = useState('transparent')
    const menuItemClass = 'menu-item flex-1 flex justify-center items-center p-[8px]'
    const menuItemStyle = {
        borderRadius: `${PLAYER_BORDER_VALUE}px ${PLAYER_BORDER_VALUE}px 0 0`,
        background
    }
    const onClickItem = () => {
        onClick(menuName)
    }
    useEffect(() => {
        if(menuName === selectedListMenu) setBackground('#ffffff')
        else setBackground('transparent')
    }, [selectedListMenu])


    // menu item hover
    const menuItemHover = 'w-full rounded-lg duration-300 hover:bg-[rgba(255,255,255,0.6)] text-center cursor-pointer'


    return (
        <div
            className={menuItemClass}
            style={menuItemStyle}
            onPointerUp={() => onClickItem()}
        >
            <span
                className={menuItemHover}
            >
                {textToUpperCase(menuName)}
            </span>
        </div>
    )
}


export default MenuItem