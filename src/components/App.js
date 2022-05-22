import React from 'react';
import { Button } from 'react-bootstrap';
import Navbar_Component from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card_Component from './Card_Component'
import data from '../data'


function App() {
  return (
      <div className="App">
      <Navbar_Component />
      <div className="main">
        <div className="tabs">
          <Button variant="warning">Movies</Button>
          <Button variant="info">Favourites</Button>
        </div>

        <div className="list">
          {data.map((movie,index) => (
            <Card_Component movie={movie} key={index}/>
          ))}
            
        </div>
      </div>
    </div>

    
  );
}
export default App;

