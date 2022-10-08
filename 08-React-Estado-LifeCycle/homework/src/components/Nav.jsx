import React from 'react';
import Logo from '../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <div className='menuBar'>
      <div className='flexContainer'>
        <div className='imgContainer'>
          <img id="logoHenry" src={Logo} alt="logo henry"/>
        </div>
        <span className='navSpan'> Henry - Weather App </span>
        <SearchBar onSearch={onSearch}/>
      </div>
   </div>
  );
};

export default Nav;
