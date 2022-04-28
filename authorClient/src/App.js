import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Favorites from './Components/Favorites';
import Add from './Components/Create';
import View from './Components/View';
import Edit from './Components/Edit';
import axios from "axios";

function App() {
  const [Authors, setAuthors] = useState([]);

  const removeObj = authorID => {
    setAuthors(Authors.filter(Author => Author._id != authorID));
  }

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route element={<Favorites removeObj={removeObj}/>} path='/' />
          <Route element={<Add Authors={Authors} setAuthors={setAuthors}/>} path='/add' />
          <Route element={<View />} path='/author/:id' />
          <Route element={<Edit />} path='/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
