'use client'
import { useEffect, useState } from 'react'
import { FlightData, fetchFromRadar } from 'flightradar24-client'
import FlightDataBox from './components/FlightDataBox'

export default function Home() {
    // const flights = [{
    //   id: '32060785',
    //   registration: 'PH-BVN',
    //   flight: 'KL681',
    //   callsign: 'KLM219',
    //   origin: 'AMS',
    //   destination: 'YVR',
    //   latitude: 49.1832,
    //   longitude: -123.0086,
    //   altitude: 1775,
    //   bearing: 279,
    //   speed: 192,
    //   rateOfClimb: -1024,
    //   isOnGround: false,
    //   squawkCode: '',
    //   model: 'B77W',
    //   modeSCode: '4850F6',
    //   radar: 'F-KBLI1',
    //   isGlider: false,
    //   timestamp: 1694731046
    // }]

  // -------------------------------------------------------------------------------------

  // const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);
  const [flights, setFlights] = useState<FlightData[]>([]);

  // useEffect(() => {
  //   const northLat = 49.9;
  //   const westLon = 122.9;
  //   const southLat = 49.1;
  //   const eastLon = 122.1;

  //   fetch(`/api/getFlightData?northLat=${northLat}&westLon=${westLon}&southLat=${southLat}&eastLon=${eastLon}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFlights(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetch flight data:', error);
  //     });
  // }, []);

  // -------------------------------------------------------------------------------------
    // async function getAndLogFlight () {
    //   try {
    //     const flights = await fetchFromRadar(49.3, -123.3, 48.5, -122.2);
    //     console.log("Flights:\n", flights.length);
    //     console.log(flights[0]);
    //     // setFlights(flights);
    //   } catch (error) {
    //     console.error("Error: ", error);
    //   }
    // }
  
    // getAndLogFlight();
  // -------------------------------------------------------------------------------------
  // Get user location
  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setUserLocation(position.coords);
  //         console.log(userLocation);
  //       },
  //       (error) => {
  //         console.error("Error getting user location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not available in this browser.");
  //   }
  // }, []);

  // useEffect(() => {
  //   function calculateBoundingBox(centerLat:number, centerLon:number, distanceKm:number) {
  //     // Radius of the Earth in kilometers
  //     const earthRadiusKm = 6371;
    
  //     // Convert distance from kilometers to radians
  //     const distanceRadians = distanceKm / earthRadiusKm;
    
  //     // Convert center coordinates to radians
  //     const centerLatRadians = (centerLat * Math.PI) / 180;
  //     const centerLonRadians = (centerLon * Math.PI) / 180;
    
  //     // Calculate the north, south, east, and west coordinates of the box
  //     const northLat = centerLat + (distanceRadians * (180 / Math.PI));
  //     const southLat = centerLat - (distanceRadians * (180 / Math.PI));
  //     const eastLon = centerLon + (distanceRadians * (180 / Math.PI)) / Math.cos(centerLatRadians);
  //     const westLon = centerLon - (distanceRadians * (180 / Math.PI)) / Math.cos(centerLatRadians);
    
  //     return {
  //       northLat,
  //       southLat,
  //       eastLon,
  //       westLon,
  //     };
  //   }

  //   async function test(){
  //     try{
  //       if(userLocation?.latitude != null && userLocation?.longitude !=null){
  //         //const box = calculateBoundingBox(userLocation.latitude, userLocation.longitude, 1);
  //         const activeFlights = await fetchFromRadar(49.3, -123.3, 48.5, -122.2);
  //         console.log(activeFlights);
  //         setFlights(activeFlights);
  //       }
  //     } catch (error) {
  //       console.error("Error setting flights:"+ error)
  //     }
  //   }
  //   test();
  // }, [userLocation])

// -------------------------------------------------------------------------------------
  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         //const { latitude, longitude } = position.coords;
  //         setUserLocation(position.coords);
  //         console.log(userLocation);
  //         try {
  //           const activeFlights = await fetchFromRadar(49.3, -123.3, 48.5, -122.2);
  //           console.log(activeFlights);
  //           setFlights(activeFlights);
  //         } catch (error) {
  //           console.error("Error fetching flights:", error);
  //         }
  //       },
  //       (error) => {
  //         console.error("Error getting user location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not available in this browser.");
  //   }
  // }, []);
// -------------------------------------------------------------------------------------

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
