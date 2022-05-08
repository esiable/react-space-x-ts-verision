import React from 'react';
import FlightListPage from "./FlightListPage";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FlightDetailsPage from './FlightDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to='/'>
          <h1>Space X App</h1>
        </Link>
        <Routes>
          <Route path='/' element={<FlightListPage />} />
          <Route path='/details/:id' element={<FlightDetailsPage />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
