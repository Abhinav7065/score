import React, { useEffect, useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Home from './container/home';
// import About from './pages/about';
// import Profile from './pages/profile';
import NavBar from './layouts/NavBar';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
//import Customer from './screens/Customer';


function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }

  useEffect(() => {
    userState();
  }, []);

  return (
    <>
      {/* <Router>
      <Routes>
        <Route exact path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/profile" component={Profile}/>
        <Route path= "/Customer" component ={Customer}/>
        
</Routes>
    </Router>    */}
    {user !== null ? (
      <>
      
       <NavBar setUserState={() => setUser(null)}/> 
      
      
      </>
    ) : (
       <>
       {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>) 
       : ( <Signup toggle={() => formMode()}/>)}
      
   </>
    )} 
  </>
 
);
    }

export default App;
