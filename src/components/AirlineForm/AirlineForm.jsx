import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';

function AirlineForm() {
    const [airlineName, setAirlineName] = useState('');
  

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('adding airline', { airlineName });
  
      dispatch({ type: 'ADD_AIRLINE', payload: { airlineName } });
      setAirlineName('');
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
          <input placeholder='Airline Name' value={airlineName} onChange={(e) => setAirlineName(e.target.value)} />
          <button>Add Airline</button>
        </form>
        </div>
    )
};

export default AirlineForm;