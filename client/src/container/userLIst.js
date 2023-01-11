import React, {useEffect, useState} from 'react'
import { Skeleton } from "antd";

const UserList = ()=>{
    const [userList, setUserList] = useState([])

    const fetchData = async()=>{
        const response = await fetch("http://localhost:5000/userlist")
        const data = await response.json()

        if(data){
            setUserList(data.userList)
        }
    }
  

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <section>
            <div className='container'>
                <div className='userList'>
                    <h1>Current Users</h1>
                    {userList.length > 0 ? userList.map(user=>{
                        return(
                            <li key={user.id}>{user.name}</li>
                            )
                    }): (
            <Skeleton active paragraph={{ rows: 3 }} />
            // <Skeleton />
          )}
                </div>
            </div>
        </section>
    )
}

export default UserList