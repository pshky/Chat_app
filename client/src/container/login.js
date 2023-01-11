import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import { message } from 'antd';
 import { useDispatch, useSelector } from "react-redux"
import {setUserDetails}  from "../reducers/userSlice"
 import { useNavigate, Link, Route, Routes } from 'react-router-dom';
const Login = ()=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginUser = async(values, resetForm)=>{
      const requestOptions = {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
      };

      const response = await fetch('http://localhost:5000/login', requestOptions);
      const data = await response.json()
      console.log(data)
      if(data.msg === 'login success'){
          dispatch(setUserDetails(data.userDetails))
          message.success(data.msg)
          navigate("/dashBoard")
      }else{
          message.error(data.msg)
      }
  }

 const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   
 });

 return(
      
  <>
     <h1>Login</h1>
     
     <Formik
       initialValues={{
         email: '',
         password: '',
       }}
       
       validationSchema={UserSchema}
       onSubmit={(values, { resetForm })=>{
          loginUser(values)
       }}
     >
       {({ errors, touched }) => (
         <Form>
         <Field name="email" type="email" placeholder="Enter your Email"/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}<br/>
         <Field name="password" placeholder="Enter your password"/>
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}<br/>
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
     <p style={{ marginTop: '10px' }}>Dont have an account? <Link to="/signup">Signup</Link> here</p>
     </>
 );
}
 export default Login;
