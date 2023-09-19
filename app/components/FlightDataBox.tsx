'use client'

import Image from 'next/image'
import { FlightData } from "flightradar24-client";

import PlaneIcon from '../../public/plane.svg'
import PlaneTiltIcon from '../../public/plane-tilt.svg'
import Speedo from '../../public/speed.svg'
import Compass from '../../public/compass.svg'
import Altitude from '../../public/altitude.svg'
import Binoculars from '../../public/binoculars.svg'

import { transform } from 'typescript';

const FlightDataBox = (/*data:FlightData*/) => {

    return (
        <>
            <div className="flex-1 min-h-48 max-w-xl min-width-sm font-mono">
                <div className="grid grid-cols-3">

                    {/* --- Top Left --- */}
                    <div className="col-span-2 bg-[#0895A1] p-4 rounded-tl-3xl">
                        <div className="grid grid-cols-6 gap-2 items-center">
                            <div>
                                <PlaneIcon style={{ opacity: '55%', transform: 'rotate(180deg)'}} />
                            </div>
                            <div className="col-span-3">
                                <div>
                                    <p className="text-gray-700 text-xs">AIRCRAFT TYPE</p>
                                </div>
                                <div>
                                <p className="text-white text-lg">Cessna 152</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div>
                                    <p className="text-gray-700 text-xs">TAIL NUMBER</p>
                                </div>
                                <div>
                                <p className="text-white text-lg">C-FYKC</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Top Right --- */}
                    <div className="col-span-1 bg-[#0895A1] p-4 rounded-tr-3xl border-l-2 border-dashed border-gray-600">
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-700 whitespace-nowrap">Flight Info</p>
                        </div>
                    </div>

                    {/* --- Bottom Left --- */}
                    <div className="col-span-2 bg-slate-100 rounded-bl-3xl" >
                        <div 
                            className="grid grid-cols-2 h-full p-5"  
                            style={{ 
                                    backgroundImage: `url('./plane-tilt.svg')`,
                                    backgroundSize:"180px 180px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center"
                                }}
                        >
                            {/* Left elemnts */}
                            <div className="col-span-1">
                                <div className='grid h-full'>
                                    <div className="inline-flex items-center mb-5">
                                        <Speedo style={{marginRight:"10px", height:"30px", width:"30px"}}/>
                                        <p>150 kts</p>
                                    </div>
                                    <div className="inline-flex items-center mb-5">
                                        <Altitude style={{marginRight:"10px", height:"30px", width:"30px"}}/>
                                            <p>2870 ft</p>                    
                                    </div>
                                    <div className="inline-flex items-center">
                                        <Compass style={{marginRight:"10px", height:"30px", width:"30px"}}/>
                                            <p>130°</p>                                    
                                    </div>
                                </div>
                            </div>
                            {/* Right elements */}
                            <div className="col-span-1">
                                <div className='grid h-full'>
                                    <div className="inline-flex items-center mb-5">
                                        <p className="mr-2 font-bold">LAT</p>
                                        <p>49.1832</p>
                                    </div>
                                    <div className="inline-flex items-center mb-5">
                                        <p className="mr-2 font-bold">Lon</p>
                                        <p>-123.0086</p>                    
                                    </div>
                                    <div className="inline-flex items-center">
                                        <Binoculars style={{marginRight:"10px", height:"30px", width:"30px"}}/>
                                        <p>North West</p>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Bottom Right --- */}
                    <div className="bg-slate-100 p-4 rounded-br-3xl border-l-2 border-dashed border-gray-600">
                        Right Bottom
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlightDataBox;