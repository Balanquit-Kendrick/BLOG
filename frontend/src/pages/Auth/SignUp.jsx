import React, { useState }from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '@/utils/axiosInstance';
import { validateEmail } from '@/utils/helper';
import { Button } from '@/components/ui/button';
import { SignUpForm } from "@/components/signup-form"
import Loading from '@/components/loading';
import { v4 as uuidv4 } from 'uuid'
const SignUp = () => {
  const [ error, setError ] = useState('');
  const [ progress, setProgress ] = useState(13)
  const [ res, setRes ] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    const { name, email, password, confirmPassword } = formData;

    if(!name || !email || !password || !confirmPassword){
      setError('Please fill all fields')
      console.log('Please fill all fields');
      return;
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email.");
      console.log('Invalid email');
      return;
    }

    if (password !== confirmPassword){
      setError("Mismatch password.");
      return;
    }

    setError("")

    try{
      const id = uuidv4();
      const response = await axiosInstance.post("/users/auth/signup", {
        id,
        name,
        email,
        password,
        confirmPassword
      })

      if (response.data?.error){
        setError(response.data.message)
        return
      }
      navigate('/login')

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
          <SignUpForm handleSignUp={handleSignUp} error={error} message={res}/>
        </div>
      </div>
    </div>
  )
}

export default SignUp