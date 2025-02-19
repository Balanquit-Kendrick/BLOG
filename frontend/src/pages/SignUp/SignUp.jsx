import React, { useState }from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(!firstname || !lastname || !email || !password || !confirmPassword){
      console.log('Please fill all fields');
    }

    if (password !== confirmPassword){
      console.log('mismatch password');
    }
  }

  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col min-w-[1200px] min-h-screen items-center justify-center'>
          
          <form onSubmit={handleSignUp}>
          <h1 className='text-lg font-bold'>SignUp</h1>
            <div>
              <div>
                <p>Firstname: </p>
                <input 
                  type="text" 
                  className='border rounded-sm'
                  value={firstname} 
                  onChange={(e) => {
                  setFirstname(e.target.value)
                }}/>
              </div>
              <div>
                <p>Lastname: </p>
                <input 
                  type="text" 
                  className='border rounded-sm'
                  value={lastname}
                  onChange={(e) => {
                  setLastname(e.target.value)
                }}/>
              </div>
              <div>
                <p>Email: </p>
                <input 
                  type="email" 
                  className='border rounded-sm'
                  value={email}
                  onChange={(e) => {
                  setEmail(e.target.value)
                }}/>
              </div>
              <div>
                <p>Password: </p>
                <input 
                  type="password" 
                  className='border rounded-sm'
                  value={password}
                  onChange={(e) => {
                  setPassword(e.target.value)
                }}/>
              </div>
              <div>
                <p>Confirm Password: </p><input 
                  type="password" 
                  className='border rounded-sm'
                  value={confirmPassword}
                  onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}/>
              </div>
            </div>
            <div className='flex justify-self-center'>
              <input type="submit" className='bg-blue-400 rounded-sm p-1 m-2 text-white items-center' value="Create Account"/>
            </div>
          </form>

          <div className='flex'>
            <Link to='/'>
              <button className='text-blue-400 m-2'>
                Back
              </button>
            </Link>
            <Link to='/login'>
              <button className='text-blue-400 m-2'>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp