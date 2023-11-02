
import React from 'react';
import './Gallery.css'
import { useCallback } from 'react'
import Image from '../Image/Image';
import update from 'immutability-helper';
import { useDataContext } from '../../hooks/useDataContext';
import imageIcon from '../../assets/images/image_icon.png'
const Gallery = () => {
  const { images, setImages } = useDataContext()
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])
  const renderCard = useCallback((image, index) => {
    return (
      <Image
        key={index}
        index={index}
        id={image.id}
        image={image}
        moveCard={moveCard}
      />
    )
  }, [])

  return (
    <>

      <div className="image-gallery">
        {images.map((image, index) => renderCard(image, index))}
        <div className='add-image'>
          <img src={imageIcon} alt="" />
          <p>Add Images</p>
        </div>
      </div>

    </>
  );
};

export default Gallery;
