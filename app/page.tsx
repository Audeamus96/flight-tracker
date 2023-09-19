import { fetchFromRadar } from 'flightradar24-client'
import FlightDataBox from './components/FlightDataBox'

export default async function Home() {
    const flights = [{
      id: '32060785',
      registration: 'PH-BVN',
      flight: 'KL681',
      callsign: 'KLM219',
      origin: 'AMS',
      destination: 'YVR',
      latitude: 49.1832,
      longitude: -123.0086,
      altitude: 1775,
      bearing: 279,
      speed: 192,
      rateOfClimb: -1024,
      isOnGround: false,
      squawkCode: '',
      model: 'B77W',
      modeSCode: '4850F6',
      radar: 'F-KBLI1',
      isGlider: false,
      timestamp: 1694731046
    }]
  // const flights = await fetchFromRadar(49.3, -123.3, 48.5, -122.2);
  // console.log("flights:\n" + flights.length);
  // console.log(flights[0]);
  return (
    <>
      <div>
        <header className="flex- justify-between items-center mb-4">
          <h1 className="text-2x1">Flights in your area</h1>
        </header>
        <ul>
          { flights.map(flight => (
              <li key={flight.id}>{flight.callsign}</li>
            ))
          }
        </ul>
        <FlightDataBox/>
      </div>
    </>
  )
}
