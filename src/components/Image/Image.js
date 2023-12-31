import React, { useState } from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDataContext } from "../../hooks/useDataContext";
import "./Image.css";
const Image = ({ index, image, moveCard, id }) => {
  const { images, setImages, count, setCount } = useDataContext();
  const ref = useRef(null);

  const [{ handlerId ,isOver}, drop] = useDrop({
    accept: "item",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: !!monitor.isOver(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


const cardStyles ={
  opacity : isDragging ? 0 : 1,
  border : isOver ? '3px solid gray' : 'none',
  transform : isOver ? 'translateY(10px)' : 'translateY(0)'
}

  const dropAreaStyles = {
    opacity: isOver ? 0 : 1, 
  };


  drag(drop(ref));


  const handleCheckBox = (id) => {
    const updatedItems = [...images];
    const index = updatedItems.findIndex((dt) => dt.id === id);
    if (index !== -1) {
      if (updatedItems[index].isChecked === false) {
        updatedItems[index].isChecked = true;
        setCount(count + 1);
      } else {
        updatedItems[index].isChecked = false;
        setCount(count - 1);
      }
      setImages(updatedItems);
    }
  };

  return (
    <div
      className={`image bg-white ${index === 0 ? "feature-image" : ""} ${image.isChecked ? "image-selected" : ""
        }`}
      ref={ref}
      style={cardStyles}
      data-handler-id={handlerId}
    >
      <input
        type="checkbox"
        className={`${image.isChecked ? "check-box-selected" : "check-box"}`}
        checked={image.isChecked}
        onChange={() => handleCheckBox(id)}
      />
      <img src={image.url} alt="img" style={dropAreaStyles} className="bg-white" />
      <div className={`${image.isChecked ? "" : "overlay"}`}></div>
    </div>
  );
};

export default Image;
