import Loading from '@/components/loading';
import { LoginForm } from '@/components/login-form'
import axiosInstance from '@/utils/axiosInstance';
import { validateEmail } from '@/utils/helper';
import { checkToken } from '@/utils/tokenController';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [ error, setError ] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = checkToken()
    if(token){
      navigate('/dashboard')
    }
  })

  const handleLogin = async (formData) => {
    
  const { email, password } = formData;
  
    if(!email || !password ){
      setError('Please fill all fields')
      return;
    }

    if(!validateEmail(email)){
      setError("Invalid Email");
      return;
    }

    try{
      const response = await axiosInstance.post("/users/auth/login", {
        email,
        password,
      })

      if (response.data?.error){
        setError(response.data.message)
        return
      }

      if (response.data?.accessToken){
        localStorage.setItem("token", response.data.accessToken)
        navigate('/dashboard')
      }

    } catch (error){
      if(error.response?.data?.message){
        setError(error.response.data.message)
      }else{
        setError('An error occurred while signing up. Please try again.')
      }
    }
  }
  
  return (
    <div>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          {<Loading />}
          <LoginForm handleLogin={handleLogin} error={error}/>
        </div>
      </div>
    </div>
  )
}

export default Login