import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col min-w-[1200px] min-h-screen items-center justify-center'>
          <h1>LandingPage</h1>
          <Link to='/login'>
            <button className='bg-blue-400 rounded-sm p-1 m-2 text-white'>
              Login
            </button>
          </Link>
          <Link to='/signup'>
            <button className='bg-blue-400 rounded-sm p-1 text-white'>
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage