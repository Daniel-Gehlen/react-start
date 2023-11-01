
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente Routes

import './App.css';
import logo from './logo.svg';

import Navbar from './components/layout/navbar/NavBar';
import Home from './components/layout/navbar/Home';
import Section2 from './components/layout/navbar/Section2';
import Section3 from './components/layout/navbar/Section3';
import Section4 from './components/layout/navbar/Section4';
import Section5 from './components/layout/navbar/Section5';
import Section6 from './components/layout/navbar/Section6';
import Section7 from './components/layout/navbar/Section7';
import Section8 from './components/layout/navbar/Section8';
import Section9 from './components/layout/navbar/Section9';
import Section10 from './components/layout/navbar/Section10';
import Section11 from './components/layout/navbar/Section11';



function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Navbar />
            {/* Use o componente Routes para definir as rotas */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/section2" element={<Section2 />} />
              <Route path="/section3" element={<Section3 />} />
              <Route path="/section4" element={<Section4 />} />
              <Route path="/section5" element={<Section5 />} />
              <Route path="/section6" element={<Section6 />} />
              <Route path="/section7" element={<Section7 />} />
              <Route path="/section8" element={<Section8 />} />
              <Route path="/section9" element={<Section9 />} />
              <Route path="/section10" element={<Section10 />} />
              <Route path="/section11" element={<Section11 />} />
            </Routes>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Router>
  );
}

export default App;
