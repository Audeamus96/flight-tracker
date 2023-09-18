'use client'

import Image from 'next/image'
import { FlightData } from "flightradar24-client";
import planeIcon from '../../public/plane.svg'
import { transform } from 'typescript';

const FlightDataBox = (/*data:FlightData*/) => {

    return (
        <>
            <div className="flex-1 min-h-48 max-w-xl min-width-sm font-mono">
            <div className="grid grid-cols-3">

                {/* Top Left */}
                <div className="col-span-2 bg-[#0895A1] p-4 rounded-tl-3xl">
                    <div className="grid grid-cols-6 gap-2 items-center">
                        <div>
                            <Image 
                                src={planeIcon}
                                alt="Plane"
                                style={{
                                    opacity: '55%',
                                    transform: 'rotate(180deg)'
                                }}
                            />
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

                {/* Top Right */}
                <div className="bg-[#0895A1] p-4 rounded-tr-3xl border-l-2 border-dashed border-gray-700">
                    Right Top
                </div>

                {/* Bottom Left*/}
                <div className="col-span-2 bg-slate-100 p-4 rounded-bl-3xl">
                   <p>Left Bottom</p>
                   <p>Left Bottom</p>
                </div>

                {/* Bottom Right */}
                <div className="bg-slate-100 p-4 rounded-br-3xl border-l-2 border-dashed border-gray-700">
                    Right Bottom
                </div>
            </div>

                {/* <div className="flex flex-row p-4 bg-[#0895A1] rounded-t-3xl">
                    <p>Here</p>
                </div>
                <div className="flex p-4">
                    <p>Here</p>
                </div> */}
            </div>
        </>
    );
}

export default FlightDataBox;