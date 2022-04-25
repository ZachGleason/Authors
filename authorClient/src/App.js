import Favorite from './Components/Favorites';
import React, { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Favorite />
  );
}

export default App;
