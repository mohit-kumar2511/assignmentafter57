import React, { useState } from 'react'
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router';
import { AiOutlineMail } from "react-icons/ai";

const SignUP = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    function handleFormSubmit(values) {
        // e.preventDefault();
        console.log("data submitted",values.username, values.password);
    }

    const schema = Yup.object().shape({
        username: Yup.string().min(5).required(),
        email:Yup.string().email().required(),
        password: Yup.string().min(8,"password must be 8 letter").required(),
    });


    const {handleSubmit, values, handleChange, errors, handleBlur, touched, dirty, isValid  } = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:"",
        },
        onSubmit: handleFormSubmit,
        validationSchema: schema,
    });

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
                    <input onChange={handleChange} onBlur={handleBlur} value={values.username} type="text" name="username" placeholder='Username' className='border w-[250px] pl-8 pr-2 py-1 rounded'/>
                    <FiUser className='absolute top-2 left-2' />
                </div>
                {touched.username && errors.username && <div className='text-red-500'>{errors.username}</div>}
                <div className='relative'>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" name="email" placeholder='Email' className='border w-[250px] pl-8 pr-2 py-1 rounded'/>
                    <AiOutlineMail className='absolute top-2 left-2' />
                </div>
                {touched.email && errors.email && <div className='text-red-500'>{errors.email}</div>}
                <div className='relative'>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" name="password" placeholder='Password' className='border w-[250px] pl-8 pr-2 py-1 rounded'/>
                    <RiLockPasswordFill className='absolute top-2 left-2' />
                </div>
                {touched.password && errors.password && <div className='text-red-500'>{errors.password}</div>}
            </div>
            <button disabled={!isValid&&!dirty} className='text-blue-700 disabled:bg-gray-300 bg-white mt-6 w-full py-2 shadow shadow-black rounded text-sm font-bold'>SIGN UP</button>
            <div className='my-2'>have an account? <Link to='/' className='underline text-blue-300'>login please!</Link></div>
        </form>
    </div>
  )
}

export default SignUP;
