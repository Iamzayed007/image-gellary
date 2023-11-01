import React, { useState } from 'react'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
const Image = ({index,image,moveCard,id}) => {
  const [selectedImages, setSelectedImages] = useState({});
  const [selectedId, setSelectedId] = useState();
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
      accept: 'item',
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover(item, monitor) {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = index

        if (dragIndex === hoverIndex) {
          return
        }

        const hoverBoundingRect = ref.current?.getBoundingClientRect()

        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        const clientOffset = monitor.getClientOffset()
   
        const hoverClientY = clientOffset.y - hoverBoundingRect.top

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
    
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }

        moveCard(dragIndex, hoverIndex)
        item.index = hoverIndex
      },
    })
    const [{ isDragging }, drag] = useDrag({
      type: 'item',
      item: () => {
        return { id, index }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))



    const handleCheckBox =(id)=>{
console.log(id);

    }



  return (
    <div  className={`image ${index === 0 ? 'feature-image' : ''}`} ref={ref} style={{  opacity }} data-handler-id={handlerId}>
    <input type="checkbox" className='check-box' checked={image.isChecked} onChange={()=>handleCheckBox(id)} />
    <img src={image.url} alt={`Image ${index}`} />
  </div>
  )
}

export default Image