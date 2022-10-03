import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from './components/Themes';
import { NavBar } from './components/NavBar';
import { Titulo } from './components/Titulo';
import Switch from './components/Switch';
import { ThemeImg } from './components/ThemeImg';
import { Routes, Route, Link } from "react-router-dom";
import { HomeContainer } from './components/HomeContainer';
import CountryDetail from './components/CountryDetail';


function App() {

  const [theme, setTheme] = useState('ligth');

  return (
    <>
    <ThemeProvider theme={Themes[theme]}>
      <div className="App">
        <NavBar>
          <Link to={'/'}><Titulo>Countries App</Titulo></Link>
          <div className='switch-container'>
            <ThemeImg theme= {theme}></ThemeImg>
            <Switch theme={theme} setTheme={setTheme}></Switch>
          </div>
        </NavBar>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/countries/:name" element={<CountryDetail />} />
        </Routes>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
