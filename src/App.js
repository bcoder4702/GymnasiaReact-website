import React from 'react';
import Navbar from './components/navbar'
import Header from './components/header';
import Feature from './components/features';
import Offer from './components/offer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Offer/>
    </div>
  );
}

export default App;
