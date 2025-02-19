import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col min-w-[1200px] min-h-screen items-center justify-center'>
          <h1>Login</h1>
          <div>
            <div>
              <p>Email: </p>
              <input type="email" className='border rounded-sm'/>
            </div>
            <div>
              <p>Password: </p><input type="password" className='border rounded-sm'/>
            </div>
          </div>
          <input type="submit" className='bg-blue-400 rounded-sm p-1 m-2 text-white'/>
          <Link to='/'>
            <button className='text-blue-400'>
              Back
            </button>
          </Link>
          <Link to='/signup'>
            <button className='text-blue-400'>
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login