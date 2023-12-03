import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { AboutComponent } from './AboutComponent';
import { PerksComponent } from './PerksComponent';
import { StartComponent } from './StartComponent';

export const Home = () => {
  const { user } = useAuth();
  const [activePage, setActivePage] = useState('about');
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="containerGeneral">
        <div className="imageButtons">
          <img
            src="about-image-url.jpg" 
            alt="About"
            onClick={() => handlePageChange('about')}
          />
          <img
            src="perks-image-url.jpg"
            alt="Perks"
            onClick={() => handlePageChange('perks')}
          />
          <img
            src="start-image-url.jpg" 
            alt="Start"
            onClick={() => handlePageChange('start')}
          />
        </div>

       
        {activePage === 'about' && <AboutComponent />}
        {activePage === 'perks' && <PerksComponent />}
        {activePage === 'start' && <StartComponent />}
      </div>
    </>
  );
};
