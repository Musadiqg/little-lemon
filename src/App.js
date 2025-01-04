import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Reservations from './pages/Reservations';
import Hero from './components/Hero';
import CustomersSay from './components/CustomersSay';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <Main/>
            <CustomersSay/>
          </>
        } />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/order-online" element={<OrderOnline/>} />
        <Route path="/reservations" element={<Reservations/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
