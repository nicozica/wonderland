import './App.css';
import React, { useState } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [images, setImages] = useState([
    { id: 1, title: 'Wonder Woman', filename: 'image01.jpg' },
    { id: 2, title: 'Around the World', filename: 'image02.jpg' },
    { id: 3, title: 'Sitting at the park', filename: 'image03.jpg' },
    { id: 4, title: 'Matecito', filename: 'image04.jpg' },
    { id: 5, title: 'Ethereal', filename: 'image05.jpg' },
    // Agrega más imágenes según sea necesario
  ]);

  // Invertir el orden del array de imágenes
  const reversedImages = [...images].reverse();


  return (
    <div className="App text-light">
      <div className="container">
        <h1 className='my-4'>Welcome to Wonderland</h1>
        <Gallery images={reversedImages} />
      </div>
    </div>
  );
}

export default App;
