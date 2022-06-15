import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Categories from './pages/Categories';
import Recipe from './pages/Recipe';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/category/:name' element={<Categories />} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
