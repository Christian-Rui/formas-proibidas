import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/css/app.css';

import Home from './components/Home/Home.js';
import PaginaCalculo from './components/Calculo/PaginaFormas.js';


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
