import React from 'react'

export default function ImageCard() {
    return (
        <div>
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src="#" alt="Forest" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Forest</div>
                    
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Print</button>
                    {/* <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</button>
                    <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</button> */}
                </div>
            </div>
        </div>
    )
}
