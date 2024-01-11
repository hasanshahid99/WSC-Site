import React, { useState } from 'react';

const ImageCarousel: React.FC = () => {
  const images: string[] = [
    'assets/Players/kneeling.jpeg',
    'assets/Players/George.jpeg',
    'assets/Players/jepe.jpeg',
    'assets/Players/pav.jpeg'
  ];

  const [currentImage, setCurrentImage] = useState<number>(0);

 

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      
        <img
        onClick={nextImage}
          src={images[currentImage]}
          alt={` Players of Wimbledon Sporting Club ${currentImage + 1}`}
          width ='100%'
           
          style={{objectFit: 'contain' }}
        />
        <div className="overlay-container">
        {/* <p className="overlay-text">NEXT IMAGE</p> */}
      </div> 
      {/* <button onClick={nextImage}>&#8250;</button> */}
    </>
  );
};

export default ImageCarousel;
