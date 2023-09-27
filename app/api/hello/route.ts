import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { fetchFromRadar } from 'flightradar24-client'

type ResponseData = {
    message: string
  }
   
export function GET() {
  return NextResponse.json({message:"Hello World!!!"})
   // res.status(200).json({ message: 'Hello from Next.js!' })
  }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     console.log("API route was called");
//     try{
//         const { northLat, westLon, southLat, eastLon } = req.query;
//         console.log('Coords: ' + northLat + ' | ' + westLon + ' | ' + southLat+ ' | ' + eastLon);

//         if(!northLat || !westLon || !southLat || !eastLon) {
//             return res.status(400).json({ error: 'Missing coordinates'})
//         }
//         const activeFlights = [{
//             id: '32060785',
//             registration: 'PH-BVN',
//             flight: 'KL681',
//             callsign: 'KLM219',
//             origin: 'AMS',
//             destination: 'YVR',
//             latitude: 49.1832,
//             longitude: -123.0086,
//             altitude: 1775,
//             bearing: 279,
//             speed: 192,
//             rateOfClimb: -1024,
//             isOnGround: false,
//             squawkCode: '',
//             model: 'B77W',
//             modeSCode: '4850F6',
//             radar: 'F-KBLI1',
//             isGlider: false,
//             timestamp: 1694731046
//           }]//await fetchFromRadar(49.3, -123.3, 48.5, -122.2);
//         res.status(200).json(activeFlights);
//     }catch ( error ){
//         console.error('Error fetching flight data:', error);
//         res.status(500).json({ error: 'Internal Server Error'});
//     }
// };