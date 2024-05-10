import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './compo/home'
import Sidebaranim from './compo/sidebaranim'
import Animal from './compo/animal'
import Production from './compo/production'
import Sante from './compo/sante'
import Login from './compo/login'
import Sidebaragri from './compo/sidebaragri';
import Croissance from './compo/croissance';
import Culture from './compo/culture'
import Profil from './compo/profil'



function App() {  

  return (
    
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sidebaranim" element={<Sidebaranim />} />
        <Route path="/animal" element={<Sidebaranim data={"animal"} />} />
        <Route path="/croissance" element={<Sidebaranim data={"croissance"} />} />
        <Route path="/production" element={<Sidebaranim data={"production"} test="hh" />} />
        <Route path="/sante" element={<Sidebaranim data={"sante"} />} />
        <Route path="/sidebaragri" element={<Sidebaragri  />} />
        <Route path="/production/sidebaragri" element={<Sidebaragri  />} />
        <Route path="/profil" element={ <Sidebaranim data={"profil"} /> }/>
        <Route path="/culture" element={<Sidebaragri data={"culture"} />} />
        <Route path="/meteo" element={<Sidebaragri data={"meteo"} />} />
        <Route path="/cultivation" element={<Sidebaragri data={"cultivation"} />} />



      </Routes>
      </Router>
    
  );
}

export default App
