
import Routers from "./components/routes";
import './App.css';
import SideNav from "./components/sideNav";
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:3000");
const App = () =>{
  
  return(
    <>
      
      <Routers/>
      <SideNav/>
    </>
  )
}


export default App