import React from 'react'
import Loader from './Loader'

const LoaderScreen = ({ fadeOut }) => {
  return (
    <div className={`loader-screen ${fadeOut ? 'fade-out' : ''}`}>
      <Loader />
    </div>
  )
}

export default LoaderScreen
