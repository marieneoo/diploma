import React, { useInsertionEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.js';
import About from './pages/about/about.js';
import Classes from './pages/classes/classes.js';
import Contact from './pages/contact/contact.js';
import Spa from './pages/spa/spa.js';
import Menu from './components/menu/index.js';
import Footer from './components/footer/footer.js';
import SignIn from './pages/authenticate/sign_in.js';
import SignUp from './pages/authenticate/sign_up.js';
import ForgPass from './pages/authenticate/forg_pass.js';
import ErrorPage from './pages/error/error.js';
import Cookies from "js-cookie"
import './App.css';


function App() {
 const [token, setToken] = useState(false)
  const [display, setDisplay] = useState(false)
 useInsertionEffect(() => {
  console.log(token)
  let cookieToken = Cookies.get('auth')
  if(cookieToken){
    setToken(true)
  }else{
    setToken(false)
  }
    if (window.location.pathname === "/login" || window.location.pathname === "/register" || window.location.pathname === "/forgot_password" || window.location.pathname === "/error") {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }, [window.location.pathname])
  console.log(display)


  

  return (
    <div className="App">
      <Router>
        {display &&  <Menu />}
        <Routes>
          <Route index element={<SignIn />}></Route>
          <Route path="/home" element={token ? <Home /> : <ErrorPage/>}></Route>
          <Route path="/about" element={token ? <About />: <ErrorPage/>}></Route>
          <Route path="/classes" element={token ? <Classes />: <ErrorPage/>}></Route>
          <Route path="/contact" element={token ? <Contact />: <ErrorPage/>}></Route>
          <Route path="/spa" element={token ? <Spa />: <ErrorPage/>}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/forgot_password" element={<ForgPass />}></Route>
         <Route path="/error" element={<ErrorPage />}></Route>
        </Routes>
        {display && <Footer />}
      </Router>


    </div>
  );


}

export default App;
