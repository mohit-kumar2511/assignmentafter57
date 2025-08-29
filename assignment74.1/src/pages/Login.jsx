import React, { useState } from 'react'
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';


    function handleFormSubmit(values,bag) {
        // e.preventDefault();
        axios.post("https://myeasykart.codeyogi.io/login",{
            email: values.email,
            password: values.password
        })
        .then((response)=>{
            const {user, token} = response.data;
            localStorage.setItem("token", token);
            bag.props.setUser(user);
        })
        .catch(()=>{
            console.log("error in login");
        })
    }

    const schema = Yup.object().shape({
        email: Yup.string().min(5).required(),
        password: Yup.string().min(8,"password must be 8 letter").required(),
    });

    const initialValues={
        email:"",
        password:"",
    }


const Login = ({handleSubmit, values, handleChange, errors, handleBlur, touched, dirty, isValid}) => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");


    // const {handleSubmit, values, handleChange, errors, handleBlur, touched, dirty, isValid  } = useFormik({
    //     initialValues:{
    //         username:"",
    //         password:"",
    //     },
    //     onSubmit: handleFormSubmit,
    //     validationSchema: schema,
    // });

    // function handleUsernameChange(e) {
    //     setUsername(e.target.value);
    // }
    // function handlePasswordChange(e) {
    //     setPassword(e.target.value);
    // }


  return (
    <div className='min-h-screen bg-[url("/backlog.png")] bg-no-repeat bg-cover flex items-center justify-center '>
        <form onSubmit={handleSubmit} className='text-white flex flex-col items-center'>
            <LiaCartArrowDownSolid className='text-9xl '/>
            <div className='flex flex-col items-center gap-3 mt-4'>
                <div className='relative'>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" name="email" placeholder='Email' className='border w-[250px] pl-8 pr-2 py-1 rounded'/>
                    <FiUser className='absolute top-2 left-2' />
                </div>
                {touched.email && errors.email && <div className='text-red-500'>{errors.email}</div>}
                <div className='relative'>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" name="password" placeholder='Password' className='border w-[250px] pl-8 pr-2 py-1 rounded'/>
                    <RiLockPasswordFill className='absolute top-2 left-2' />
                </div>
                {touched.password && errors.password && <div className='text-red-500'>{errors.password}</div>}
            </div>
            <button type="submit" disabled={!isValid&&!dirty} className='text-blue-700 hover:cursor-pointer disabled:bg-gray-300 bg-white mt-6 w-full py-2 shadow shadow-black rounded text-sm font-bold'>LOGIN</button>
            <Link to='/forgot' className='text-sm ml-[53%] my-1'>Forgot password?</Link>
            <div>Don't have an account? <Link to='/signup' className='my-1 underline text-blue-300'>click here</Link></div>
        </form>
    </div>
  )
}

const myHOC = withFormik({validationSchema: schema, initialValues: initialValues, handleSubmit: handleFormSubmit});
const ImprovedLogin = myHOC(Login);

export default ImprovedLogin;