import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [airlineName, setAirlineName] = useState('');
  const airlineList = useSelector(store => store.airlineList);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('adding airline', { airlineName });

    dispatch({ type: 'ADD_AIRLINE', payload: { airlineName } });
    setAirlineName('');
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Airline Name' value={airlineName} onChange={(e) => setAirlineName(e.target.value)} />
        <button>Add Airline</button>
      </form>
      <section>
        <table>
          <thead>
            <tr>
              <th>Airlines
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                {airlineList.map((airline) =>
                  <li key={airline.airlineName}> {airline.airlineName} </li>
                )}
              </th>
            </tr>
          </tbody>

        </table>
      </section>
    </div>
  );
}

export default App;
