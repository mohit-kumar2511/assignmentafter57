import React from 'react'
import {Link} from 'react-router';

const Forgot = () => {
  return (
    <div className='min-h-screen bg-[url("/backlog.png")] bg-no-repeat bg-cover flex items-center justify-center'>
        <div className='bg-white p-6 rounded flex flex-col'>
            <h1 className='text-2xl font-bold'>Forgot your password?</h1>
            <p className='text-sm text-gray-500'>Please enter the username you use to sign in</p>
            <div className='flex flex-col mt-3 text-gray-500'>
                <label className='text-sm mb-1' htmlFor='user' >Your username</label>
                <input type="text" id='user' placeholder='Username' className='border-b w-full border-gray-500 pl-2 pr-2 py-1' />
            </div>
            <button className='mt-3 bg-indigo-600 text-white text-sm py-2 rounded '>Request password reset</button>
            <Link className='text-blue-700 m-2 text-center' to='/'>Back to Sign in</Link>
        </div>
    </div>
  )
}

export default Forgot
