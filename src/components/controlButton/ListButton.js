import { Button } from '@/components/button'
import { ListShape } from '@/components/shape'


const ListButton = ({scale, color, pointerup}) => {
    const ListButtonClass = 'control-list-button aspect-square h-full flex justify-center items-center'


    return(
        <div
            className={ListButtonClass}
        >

            <Button
                scale={scale}
                pointerup={pointerup}
            >

                <ListShape color={color}/>

            </Button>

        </div>
    )
}


export default ListButton