import React from 'react'
import './Card.css'

export default function Footer() {
  return (
    <div
    className='h-40 custom-bg p-5'>
      <div className='text-white text-bold text-center m-5'>
        This is project done by Lalit , Santosh and Sumit.  
      </div>
      <div className='text-white text-bold text-center'>
        For more details goto <a className="text-red-400 font-mono hover:underline p-1" href='https://github.com/SumitPandey001'>Github</a>
      </div>
    </div>
  )
}
