import {
	BrowserRouter as Router,
	Routes,
	Route,
 } from "react-router-dom";
import Login from './container/login'
import SignUp from "./container/signUp";
const App = () =>{
  return(
    <>
    
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    
    </>
  )
}

export default App