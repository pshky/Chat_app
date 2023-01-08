
import React from "react";

import { useSelector } from 'react-redux';

const Dashboard = ()=>{
    const {name} = useSelector(state=> state.user)
    return(
        <>
            <h4>Welcome, {name}</h4>

            <>
                <Card title='Current Users' link="/userList"  icon={faDolly}/>
            </>
        </>
    )
}
export default Dashboard