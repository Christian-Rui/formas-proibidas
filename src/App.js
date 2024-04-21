
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';

import Home from './components/PaginaPrincipal/Home.js';
import PaginaCalculo from './components/PaginaCalculo/PaginaFormas.js';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina-calculo/:forma" element={<PaginaCalculo />}/>
      </Routes>
    </Router>
    // exact 
  );
}

export default App;
