import React from 'react'
import ResponsiveNavBar from '../Navigation'
import TravelRequest from '../Components/TravelRequest'
import FlightList from '../Components/FlightList'

function Homepage() {
  return (
    <>
    <ResponsiveNavBar />
    <TravelRequest />
    <FlightList />
    </>
  )
}

export default Homepage