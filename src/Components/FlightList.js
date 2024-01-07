import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import FlightIcon from '@mui/icons-material/Flight';

const flightsHeadingData = ['Id', 'Fare', 'DepartureCityCode', 'DepartureCityName', 'DepartureTerminal', 'DepartureAirportCode', 'DepartureAirportName', 'DepartureCountryCode', 'DepartureCountryName', 'DepartureTime', 'AirlineCode', 'AirlineName', 'FlightNumber', 'StopInfo', 'ArrivalCityCode', 'ArrivalCityName', 'ArrivalTerminal', 'ArrivalAirportCode', 'ArrivalAirportName', 'ArrivalCountryCode', 'ArrivalCountryName', 'ArrivalTime', 'TotalDuration'];

function FlightList() {
  const [loading, setLoading] = React.useState(true);
  const [flightsData, setFlightsData] = useState([]);

  useEffect(() => {
    const flightsHandler = async () => {
      try {
        const response = await fetch('https://api.npoint.io/4829d4ab0e96bfab50e7');
        const data = await response.json();

        const flightsArray = Object.entries(data.data.result).map(([id, flight]) => ({
          id,
          Id: id,
          Fare: flight.fare,
          DepartureCityCode: flight.displayData.source.airport.cityCode,
          DepartureCityName: flight.displayData.source.airport.cityName,
          DepartureTerminal: flight.displayData.source.airport.terminal,
          DepartureAirportCode: flight.displayData.source.airport.airportCode,
          DepartureAirportName: flight.displayData.source.airport.airportName,
          DepartureCountryCode: flight.displayData.source.airport.countryCode,
          DepartureCountryName: flight.displayData.source.airport.countryName,
          DepartureTime: flight.displayData.source.depTime,
          AirlineCode: flight.displayData.airlines[0].airlineCode,
          AirlineName: flight.displayData.airlines[0].airlineName,
          FlightNumber: flight.displayData.airlines[0].flightNumber,
          StopInfo: flight.displayData.stopInfo,
          ArrivalCityCode: flight.displayData.destination.airport.cityCode,
          ArrivalCityName: flight.displayData.destination.airport.cityName,
          ArrivalTerminal: flight.displayData.destination.airport.terminal,
          ArrivalAirportCode: flight.displayData.destination.airport.airportCode,
          ArrivalAirportName: flight.displayData.destination.airport.airportName,
          ArrivalCountryCode: flight.displayData.destination.airport.countryCode,
          ArrivalCountryName: flight.displayData.destination.airport.countryName,
          ArrivalTime: flight.displayData.destination.arrTime,
          TotalDuration: flight.displayData.totalDuration
        }));

        setFlightsData(flightsArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    flightsHandler();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      {loading ? (
        <div className='text-center pt-20'>
          <CircularProgress />
          <h1 className='text-4xl '>Please wait flights data loading....</h1>
        </div>
      ) : (
        <>
        <div className='text-center w-full max-w-screen-lg mx-auto pt-4'>
          <h1 style={{ display: 'flex', justifyContent: 'center' }} className="text-4xl font-bold mb-4">All Flights List <FlightIcon style={{ width: '40px', height: '40px', marginLeft: '5px', transform: 'rotate(45deg)' }} /></h1>
          <p className="text-gray-600 mb-6 px-2">Browse the list of available flights below. Choose your preferred flight and have a great journey ✈️</p>
        </div>
        <DataGrid
          rows={flightsData}
          columns={flightsHeadingData.map((field) => ({ field, headerName: field.charAt(0).toUpperCase() + field.slice(1) }))}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          components={{
            Toolbar: GridToolbar,
          }}
          autoHeight
          disableSelectionOnClick
          componentsProps={{
            cell: {
              className: 'py-3',
            },
          }}
        />
        </>
      )}
    </div>
  );
}

export default FlightList;