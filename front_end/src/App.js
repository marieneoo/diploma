import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.js';
import About from './pages/about/about.js';
import Classes from './pages/classes.js';
import Contact from './pages/contact.js';
import Spa from './pages/spa.js';
import Menu from './components/menu/index.js';
import Footer from './components/footer/footer.js';
import SignIn from './pages/authenticate/sign_in.js';
import SignUp from './pages/authenticate/sign_up.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Menu/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/classes" element={<Classes/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/spa" element={<Spa/>}></Route>
        <Route path="/sign_in" element={<SignIn/>}></Route>
        <Route path="/sign_up" element={<SignUp/>}></Route>
      </Routes>
      <Footer/>
      </Router>
    
     
    </div>
  );
}

export default App;
