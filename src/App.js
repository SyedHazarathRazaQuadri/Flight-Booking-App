import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import FlightListPage from './Pages/FlightListPage';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/flight-list" element={<FlightListPage />} />
    </Routes>
    </>
  );
}

export default App;
