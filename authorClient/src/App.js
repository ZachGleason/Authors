import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Favorites from './Components/Favorites';
import Add from './Components/Create';
import Edit from './Components/Edit';
import axios from "axios";

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route element={<Favorites />} path='/' />
          <Route element={<Add />} path='/add' />
          <Route element={<Edit />} path='/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
