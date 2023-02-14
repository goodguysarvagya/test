import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('/api/photos')
      .then(res => {
        setImages(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xlg:grid-cols-6 gap-2">
      {images.map((image, index) => (
        <div key={index} className="w-full h-64 bg-clip-padding">
          <Image
            src={image.src}
            alt={image.alt}
            width='400'
            height='400'
            className="rounded-lg shadow-lg h-full w-full object-cover"
            loading="lazy"
            sizes="(min-width: 480px) 33.3vw, (min-width: 768px) 25vw, 100vw"
            style={{ maxWidth: '100%' }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;