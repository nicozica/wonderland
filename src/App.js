import './App.css';
import React, { useState } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [images, setImages] = useState([
    { id: 1, title: 'Matecito', filename: 'image01.jpg' },
    { id: 2, title: 'Manhattan', filename: 'image02.jpg' },
    { id: 3, title: 'Apocalypse', filename: 'image03.jpg' },
    { id: 4, title: 'Mondricats', filename: 'image04.jpg' },
    { id: 5, title: 'Fuscaldo', filename: 'image05.jpg' },
    { id: 6, title: 'Sunset', filename: 'image06.jpg' },
    { id: 7, title: 'Delicious Pancake', filename: 'image07.jpg' },
    { id: 8, title: 'Down the road', filename: 'image08.jpg' },
    // Agrega más imágenes según sea necesario
  ]);

  // Invertir el orden del array de imágenes
  const reversedImages = [...images].reverse();


  return (
    <div className="App text-light">
      <div className="container">
        <h1 className='my-4'>Welcome to Wonderland</h1>
        <Gallery images={reversedImages} />
        <hr></hr>
        <h2 className='h5 my-4'>©2024 Argensonix Multimedia</h2>
      </div>
      
    </div>
  );
}

export default App;
