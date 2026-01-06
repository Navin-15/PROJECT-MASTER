import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bookmyshowlogo from '/images/bookmyshow.png';
import searchIcon from '/images/search.png';
import dropdownImg from '/images/dropdownimg.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [city, setCity] = useState(localStorage.getItem('selectedCity') || 'Location');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Guest');
  const navigate = useNavigate();

  useEffect(() => {
    const onStorage = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
      setUserName(localStorage.getItem('userName') || 'Guest'); // 👈 update on storage change
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleCitySelect = (detectedCity) => {
    setCity(detectedCity);
    localStorage.setItem('selectedCity', detectedCity);
    window.dispatchEvent(new Event('locationChanged'));
  };
  const handleSearch = () => navigate('/innerinput');
  const handleHome = () => navigate('/');
  const handleLogin = () => navigate('/login');
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName'); // 👈 clear userName on logout
    setUserName('Guest');
    setIsLoggedIn(false);
    navigate('/');
  };
  const handleCityPicker = () => navigate('/cities');

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white py-2 shadow-sm">
      <div className="container-fluid ">
        <a className="navbar-brand d-flex align-items-center" onClick={handleHome} style={{ cursor: 'pointer' }}>
          <img className='' src={bookmyshowlogo} alt="Logo" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <form className="d-flex my-2 my-md-0 ms-md-3 w-75 w-md-auto ">
            <input
              className="form-control me-2 flex-grow-1"
              type="search"
              placeholder="Search for Movies, Events, Plays…"
              onClick={handleSearch}
              readOnly
              style={{ cursor: 'pointer' }}
            />
            <button
              className=" bg-transparent btn btn-outline-secondary "
              type="button"
              onClick={handleSearch}>
              <img src={searchIcon} alt="Search" height="20" />
            </button>
          </form>

          <ul className="navbar-nav ms-auto align-items-center gap-5">
            <li className="nav-item d-flex align-items-center me-3">
              <span className="nav-link p-0 d-flex " onClick={handleCityPicker} style={{ cursor: 'pointer' }}>
                {city} <img className='mt-2' src={dropdownImg} alt="▼" height="12" />
              </span>
            </li>
            <li className="nav-item w-50 me-3">
              {isLoggedIn ? (
                <>
                  <span className="nav-link">Hi,{userName}</span>
                  <button className="btn btn-outline-danger btn-sm ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button className="btn btn-outline-primary btn-sm" onClick={handleLogin}>
                  Sign In
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;







    
    
