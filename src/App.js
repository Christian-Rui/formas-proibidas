
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';

import Home from './Home.js';
import NovaPagina from './PaginaFormas.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nova-pagina/:forma" element={<NovaPagina />}/>
      </Routes>
    </Router>
    // exact 
  );
}

export default App;
