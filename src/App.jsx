import React from 'react';
import './App.css';
import {
  Navigate,
  Routes,
  BrowserRouter ,
  Route,
  
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route  path='/home' element={Home} />
          <Route  path='/cart' element={Cart} />
          <Navigate to='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
