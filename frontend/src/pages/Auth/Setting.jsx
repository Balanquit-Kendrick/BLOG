import { Button } from '@/components/ui/button'
import { deleteUser, getUserInfo } from '@/store/auth';
import { checkToken, destroyToken } from '@/utils/tokenController';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Setting = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
      fetchUser();
  }, [])

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    const userInfo = await getUserInfo(token)
    if(userInfo === 'Unauthorized'){
        localStorage.removeItem('token');
        navigate('/login')
    }
    else {
        setUser(userInfo)
    };
  }
  
  const handleDeleteUser = async () => {
    const id = user.id
    try{
      const token = checkToken();
      await deleteUser(token)
      destroyToken();
      navigate('/login')
    } catch (e) {
      console.error('Error', e)
      return ('Error', e)
    }
  }

  return (
    <div>
      <Button onClick={handleDeleteUser}>Delete Profile</Button>    
    </div>
  )
}

export default Setting