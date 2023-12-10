// src/components/Gallery.js
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="row">
      {images.map((image) => (
        <div className="col-md-4 mb-3" key={image.id}>
          <img
            src={`/images/${image.filename}`}
            alt={image.title}
            className="img-fluid nebula-effect" // Agrega la clase nebula-effect
          />
          <p className='mt-2'>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;