import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import CountryData from '../countries.json'
 import { useNavigate, Link } from 'react-router-dom';
 
const SignUp = ()=>{
  const navigate = useNavigate()

  const SignUpUser = async(values)=>{
      const requestOptions = {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
      };

      const response = await fetch('http://localhost:5000/signup', requestOptions);
      const data = await response.json()

      if(data){
          alert(data.msg)
          navigate('/')
      }
  }

 const SignUpSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    phoneNumber:Yup.string().required('Required!')
   
 });

//  const SignUp = () => (
  return(
   <div>
     <h1>Sign Up</h1>
     <Formik
       initialValues={{
        name:'',
        email: '',
        password: '',
        phoneNumber: '',
        country: '',
       }}
       
       validationSchema={SignUpSchema}
        onSubmit={values=>{
        SignUpUser(values)
       }}
     >
       {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
         <Form>
         <Field name="name" placeholder="Enter your name"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>) : null}<br/>
         <Field name="email" type="email" placeholder="Enter your Email"/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}<br/>
         <Field name="password" placeholder="Enter your password"/>
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}<br/>
        <Field name="phoneNumber" placeholder="Your Phone Number" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
            {errors.phoneNumber && touched.phoneNumber ? (<div className="error">{errors.phoneNumber}</div>) : null}<br/>
            <select name="country" value={values.country} onChange={handleChange} onBlur={handleBlur}>
             <option value="" disabled="disabled" label="Select a Country"></option>
             {CountryData.map(country => {
               const {name} = country
                 return(
                <option value={name} label={name} key={name}>{name}</option>
                )
            })}
            </select>
            {errors.country && touched.country ? (<div className="error">{errors.country}</div>) : null}<br/>
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
   
 );
}
 export default SignUp;
