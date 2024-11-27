import { useEffect, useState } from 'react'
import { LIST_ITEM_BG_ALPHA } from '@/config/style'


const TrackItem = ({order, title, artist, color, idx, onClick = () => {}}) => {
    // list item
    const listItem = 'list-item w-full h-auto flex flex-col p-[10px] cursor-pointer'
    const bgColor = color + LIST_ITEM_BG_ALPHA
    const [background, setBackground] = useState('transparent')
    const listItemStyle = {
        borderRadius: '6px',
        background: background
    }


    const titleClass = 'title text-[16px] truncate'
    

    const artistClass = 'artist text-[12px] opacity-[0.55] truncate'


    // event
    const onMouseenter = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        setBackground(bgColor)
    }
    const onMouseleave = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if(idx === order) return
        
        setBackground('transparent')
    }
    const onPointerUp = (e) => {
        e.preventDefault()
        e.stopPropagation()

        
        onClick(order)
    }


    useEffect(() => {
        if(idx === order) setBackground(bgColor)
        else setBackground('transparent')
    }, [idx, color])

 
    return(
        <div
            className={listItem}
            style={listItemStyle}
            onMouseEnter={e => onMouseenter(e)}
            onMouseLeave={e => onMouseleave(e)}
            onPointerUp={e => onPointerUp(e)}
        >

            <div
                className={titleClass}
            >
                <span>
                    {title}
                </span>
            </div>

            <div
                className={artistClass}
            >
                <span>
                    {artist}
                </span>
            </div>

        </div>
    )
}


export default TrackItem