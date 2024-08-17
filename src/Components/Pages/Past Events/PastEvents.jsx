import React from 'react'
import MainPage from './Main Page/MainPage'
import Committee from './Committee/Committee'
import Events_Grid from './Events_Grid/Events_Grid'
import './PastEvents.css'

const PastEvents = () => {
  return (
    <div className='past-events-main'>
        <MainPage/>
        <Committee/>
        <Events_Grid/>
    </div>
  )
}

export default PastEvents