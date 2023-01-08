import React, {useEffect, useState} from 'react'

const UserList = ()=>{
    const [userList, setUserList] = useState([])

    const fetchData = async()=>{
        const response = await fetch("http://localhost:5000/users")
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
                    {userList.length > 0 ? userList.map((item)=>{
                        return(
                            <Box item={item} fetchData={fetchData}/>
                            )
                    }): 'list not found'}
                </div>
            </div>
        </section>
    )
}

export default UserList