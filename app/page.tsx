import { fetchFromRadar } from 'flightradar24-client'

export default async function Home() {
  const flights = await fetchFromRadar(49.3, -123.3, 48.5, -122.2);
  console.log("flights:\n" + flights.length);
  console.log(flights[0]);
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Flights in    your area</h1>
      </header>
      <ul>
        { flights.map(flight => (
            <li key={flight.id}>{flight.callsign}</li>
          ))
        }
      </ul>
    </>
  )
}
