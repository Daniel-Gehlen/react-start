
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente Routes

import './App.css';
import logo from './logo.svg';

import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Section2 from './pages/Section2';
import Section3 from './pages/Section3';
import Section4 from './pages/Section4';
import Section5 from './pages/Section5';
import Section6 from './pages/Section6';
import Section7 from './pages/Section7';
import Section8 from './pages/Section8';
import Section9 from './pages/Section9';
import Section10 from './pages/Section10';
import Section11 from './pages/Section11';
import { Section12 } from './pages/Section12';
import { Section13 } from './pages/Section13';

import Footer from './pages/Footer';




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
              <Route path="/section12" element={<Section12 />} />
              <Route path="/section13" element={<Section13 />} />
            </Routes>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
