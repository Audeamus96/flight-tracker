import { NextResponse } from 'next/server'
import { fetchFromRadar } from 'flightradar24-client'

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
}];

export function GET() {
    return NextResponse.json({flights})
    
}