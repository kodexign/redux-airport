import { useSelector} from "react-redux";

function AirlineList() {
    const airlineList = useSelector(store => store.airlineList);
    return(
        <div>
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
    )
}

export default AirlineList;