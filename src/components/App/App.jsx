import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const airlineList = useSelector(store => store.airline);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('adding airline', )

    dispatch({type: 'UPDATE_AIRLINE', payload: newAirline});
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <button onSubmit={(e)=> handleSubmit(e)}>Add Airline</button>
      <table>{/* Airlines should be listed here */}</table>

    </div>
  );
}

export default App;
