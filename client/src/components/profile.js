import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import axios from 'axios';
import {useSelector} from 'react-redux'
import { message, Skeleton } from "antd";
import SideNav from "./sideNav";
import card_img from "../uploads/card_img.jpg"
const Portfolio =()=>{
    const {_id} = useSelector(state=> state.user)
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchUserProfileDetails = () => {
        axios.get(`http://localhost:5000/profile/${_id}`)
        .then(res=>setUserDetails(res.data.user))}

        
    const avatarupload  = async (file) => {
        const formData = new FormData();
        formData.append("avatar", file);
        const res = await fetch(`http://localhost:5000/profile/${_id}`, {
            method: "POST",
            body: formData,
        })
        const data = await res.json()

        if(res.status == 200){
            //rodo this code, 
            //disk storage-> 
            //delete if the user updates new profile picture : BE
            fetchUserProfileDetails()
        }

        if(data.msg === 'avatar upload success!!'){
            message.success(data.msg)    
            setLoading(false)     
        }
    }
 
   useEffect(()=>{
        fetchUserProfileDetails()
   },[])
    return(
        <section>
        
            <div>
            
                <div className="user_profile">
                    <div className="user_img">
                    
                        {
                            <img src={require(`../uploads/${userDetails.avatarFileName || 'card_img.jpg'}`)} alt="profile"  height={'100%'} width={'100%'}
                            />
                        }
                        
                    </div>

                    <div className="uploader">
                        <input onChange={(e)=> avatarupload(e.target.files[0])} type="file" id="upload" hidden/>
                        <label htmlFor="upload"><FaCamera/></label>
                    </div>

                    <div className="user_detail">
                    <h1>{userDetails.name}</h1>
                        <p>{userDetails.email}</p>
                        <p>{userDetails.country}</p>
                        <p>{userDetails.phoneNumber}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio