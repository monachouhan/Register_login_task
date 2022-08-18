import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import User from './Components/User';
import Register from './Components/Register';
import SignUp from './Components/SignUp';
import React from 'react';
import UsersCrenditial from './Components/UsersCrenditial';
import NewUser from './Components/NewUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element ={<User />}></Route>
        <Route path ="/Register" element ={<Register />}></Route>
        <Route path ="/SignUp" element ={<SignUp />}></Route>
        <Route path ="/UsersCrenditial" element ={<UsersCrenditial />}></Route>
        <Route path ="/NewUser" element ={<NewUser />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
