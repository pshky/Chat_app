import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserList from "../container/userList"
import Login from '../container/login';
import SignUp from '../container/signUp';
import SideNav from './sideNav';
import Portfolio from './profile';
import Chat from './chat';

const Routers = () => {
  return (
    <div>
    <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/dashboard' element={<SideNav/>}/>
        {/* <Route exact path='/userlist' element={<UserList/>}/>
        <Route exact path='/profile' element={<Portfolio/>}/>
        <Route exact path='/chat' element={<Chat/>}/> */}
    </Routes>
    </div>
  )
}

export default Routers;

