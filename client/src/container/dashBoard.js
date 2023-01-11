
import React from "react";
import {useNavigate,Link} from "react-router-dom";
import { useSelector } from 'react-redux';
// import UserList from "./userList";
const Dashboard = ()=>{
    const {name} = useSelector(state=> state.user)
    const navigate = useNavigate()
    return(
        <>
            <h4>Welcome, {name}</h4>
                <li>
                    {navigate("/userList")}
                </li>
        </>
    )
}
export default Dashboard