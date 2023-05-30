import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import React from 'react';
import Header from './components/header/header';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Clicker } from './components/CarritoClicker/carrito'

function App() {
  return (
    <div>
      <Clicker />
    </div>
  );
}

export default App
