import React from 'react';

import {useNavigate} from 'react-router-dom';

import './styles.css';

const EmptyCart = () => {
  const navigate = useNavigate();
  
  return (
    <div className='emptyCart'>
      <img src='https://merchlist.co/assets/emptycart.png' alt='' />
      <button onClick={() => navigate.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;

