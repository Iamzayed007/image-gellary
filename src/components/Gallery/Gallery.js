
import React from 'react';
import './Gallery.css'
import { useCallback, useState } from 'react'
import Image from '../Image/Image';
import update from 'immutability-helper';
import { imagesData } from '../../data/data';
import { Container } from 'react-bootstrap';
const Gallery = () => {
  const [images,setImages] = useState(imagesData)
console.log(images);
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
    </div>
 
    </>
  );
};

export default Gallery;
