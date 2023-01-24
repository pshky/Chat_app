import {
	BrowserRouter as Router,
	Routes,
	Route,
 } from "react-router-dom";
import Login from './container/login'
import SignUp from "./container/signUp";
import Dashboard from "./container/dashBoard";
import UserList from "./container/userList";
import './App.css';
const App = () =>{
  return(
    <>
    
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/userlist' element={<UserList/>}/>
      </Routes>
    
    </>
  )
}

export default App