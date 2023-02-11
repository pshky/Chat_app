import {
	BrowserRouter as Router,
	Routes,
	Route,
 } from "react-router-dom";
import Login from './container/login'
import SignUp from "./container/signUp";
import Dashboard from "./container/dashBoard";
import UserList from "./container/userList";
import Portfolio from "./components/profile";
import Chat from "./components/chat";
import Routers from "./components/routes";
import './App.css';
import SideNav from "./components/sideNav";
const App = () =>{
  return(
    <>
    
      <Routers/>
      <SideNav/>
    </>
  )
}


export default App