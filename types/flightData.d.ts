declare module 'flightradar24-client' {
    export interface FlightData {
      id: string;
      registration: string;
      flight: string;
      callsign: string;
      origin: string;
      destination: string;
      latitude: number;
      longitude: number;
      altitude: number;
      bearing: number;
      speed: number;
      rateOfClimb: number;
      isOnGround: boolean;
      squawkCode: string;
      model: string;
      modeSCode: string;
      radar: string;
      isGlider: boolean;
      timestamp: number;
    }
  
    export function fetchFromRadar(
      lat1: number,
      lon1: number,
      lat2: number,
      lon2: number
    ): Promise<FlightData[]>;
  }