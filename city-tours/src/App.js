import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <TourList></TourList>
    </main>
  );
}

export default App;
