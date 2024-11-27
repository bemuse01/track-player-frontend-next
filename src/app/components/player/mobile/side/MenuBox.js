import { LIST_MENU } from '@/config/config'
import { PLAYER_BORDER_VALUE, LIST_ITEM_BG_ALPHA } from '@/config/style'
import MenuItem from './MenuItem'


const MenuBox = ({color, selectedListMenu, onClick = () => {}}) => {
    // menu box
    const menuBoxClass = 'menu-box flex-1 h-auto text-[18px] relative'
    const menuBoxStyle = {
        color,
        borderRadius: `${PLAYER_BORDER_VALUE}px ${PLAYER_BORDER_VALUE}px 0 0`
    }


    // menu wrapper
    const menuWrapperClass = 'menu-wrapper w-full h-auto flex'


    // menu item
    const mnuItems = Object.entries(LIST_MENU).map(([key, value]) => value)
    const onClickItem = (menuName) => {
        onClick(menuName)
    }


    return(
        <div
            className={menuBoxClass}
            style={menuBoxStyle}
        >

            <div
                className={menuWrapperClass}
            >

                {
                    mnuItems.map((item, key) => (
                        <MenuItem
                            key={key}
                            menuName={item}
                            onClick={onClickItem}
                            selectedListMenu={selectedListMenu}
                        />
                    ))
                }

            </div>

        </div>
    )
}


export default MenuBox