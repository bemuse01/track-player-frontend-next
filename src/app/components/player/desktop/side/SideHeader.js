import ButtonBox from './ButtonBox'
import MenuBox from './MenuBox'
import { LIST_ITEM_BG_ALPHA } from '@/config/style'
import useStateStore from '@/store/stateStore'


const SideHeader = ({color, selectedListMenu}) => {
    // store
    const {setSelectedListMenu} = useStateStore()


    // side header
    const sideHeaderClass = 'side-header w-full h-auto'
    const sideHeaderStyle = {
        background: color + LIST_ITEM_BG_ALPHA
    }


    // header wrapper
    const headerWrapperClass = 'w-[50%] h-full flex relative'


    // menu
    const onClickListMenu = (item) => {
        setSelectedListMenu(item)
    }


    return (
        <div
            className={sideHeaderClass}
            style={sideHeaderStyle}
        >

            <div
                className={headerWrapperClass}
            >

                <ButtonBox 
                    color={color}
                />

                <MenuBox 
                    color={color}
                    selectedListMenu={selectedListMenu}
                    onClick={onClickListMenu}
                />

            </div>

        </div>
    )
}


export default SideHeader