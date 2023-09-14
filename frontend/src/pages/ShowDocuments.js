import React from 'react'
import ImageCard from '../components/ImageCard'

export default function ShowDocuments() {
  return (
    <div className='flex gap-2 justify-center nowrap'>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
    </div>
  )
}
