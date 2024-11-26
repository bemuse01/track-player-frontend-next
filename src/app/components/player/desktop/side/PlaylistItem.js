import { useState, useEffect } from 'react'
import { LIST_ITEM_BG_ALPHA } from '@/config/style'


const PlaylistItem = ({color, playlistName, currentPlaylistId, playlistId, onClick = () => {}}) => {
    // list item
    const listItem = 'list-item w-full h-auto flex flex-col p-[10px] cursor-pointer'
    const bgColor = color + LIST_ITEM_BG_ALPHA
    const [background, setBackground] = useState('transparent')
    const listItemStyle = {
        borderRadius: '6px',
        background: background
    }

    useEffect(() => {
        if(currentPlaylistId === playlistId) setBackground(bgColor)
        else setBackground('transparent')
    }, [currentPlaylistId, color])


    // 
    const playlistNameClass = 'text-[16px] truncate'


    // event
    const onMouseenter = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        setBackground(bgColor)
    }
    const onMouseleave = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if(currentPlaylistId === playlistId) return
        
        setBackground('transparent')
    }
    const onPointerUp = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if(currentPlaylistId === playlistId) return

        onClick(playlistId)
    }


    return(
        <div
            className={listItem}
            style={listItemStyle}
            onMouseEnter={e => onMouseenter(e)}
            onMouseLeave={e => onMouseleave(e)}
            onPointerUp={e => onPointerUp(e)}
        >

            <div
                className={playlistNameClass}
            >
                <span>
                    {playlistName}
                </span>
            </div>

        </div>
    )
}


export default PlaylistItem