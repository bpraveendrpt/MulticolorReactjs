import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import './switcher.scss';
import WeatherReport from './components/WeatherReport';
import About from './components/About';
import WeatherReportMap from './components/WeatherReportMap';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Admin/Dashboard';
import Main from './components/main';
import Users from './components/Users';
function App() {
  const [colorTheme, setColorTheme] = useState('theme-white');
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
  }
  return (
    <>
      <div className={`App ${colorTheme}`}>
        <div className='theme-options'>
          <div id="theme-white"
            onClick={() => handleClick('theme-white')}
            className={`${colorTheme === 'theme-white' ? 'active' : ''}`}
          />
          <div id="theme-orange" onClick={() => handleClick('theme-orange')}
            className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
          />
          <div id="theme-green" onClick={() => handleClick('theme-green')}
            className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
          />
          <div id="theme-black" onClick={() => handleClick('theme-black')}
            className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
          />
          <div id="theme-purple" onClick={() => handleClick('theme-purple')}
            className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
          />
          <div id="theme-blue" onClick={() => handleClick('theme-blue')}
            className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
          />
        </div>
        <Navbar></Navbar>
        <Routes>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Main" element={<Main />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="WeatherReportMap" element={<WeatherReportMap />} />
          <Route path="Users" element={<Users />} />
          <Route path="WeatherReport" element={<WeatherReport />} >
            
          </Route>
        </Routes>
        {/* <div className='content-box'>
          <h1>Welcome to ReactJs </h1>
          <h5>Praveen Kumar</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.</p>
        </div> */}
      </div>
      <Outlet></Outlet>
    </>
  );
}
export default App;
