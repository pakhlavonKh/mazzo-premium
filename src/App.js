import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Catalog from './pages/Catalog.js';
import Basket from './pages/Basket.js';
import Login from './pages/Login.js';

function App() {
    console.log('App component loaded');
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
