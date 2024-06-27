import React, { useState } from 'react';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineList from '../AirlineList/AirlineList';

function App() {
 
  return (
    <div>
        <h1>Redux Airport</h1>
    <AirlineForm/>
    <table>{/* Airlines should be listed here */}</table>
    <AirlineList/>
    </div>
  );
}

export default App;
