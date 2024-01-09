import './App.css';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/competences" element={<Skills />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    
  </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
