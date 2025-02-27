import Loading from '@/components/loading'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SVGBlog from '@/assets/blog.svg'
import './dashboard.css'
import axiosInstance from '@/utils/axiosInstance'
import { Button } from '@/components/ui/button'
import { getInitials } from '@/utils/helper'

const Dashboard = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(()=> {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      const userInfo = await getUserInfo(token)
      setUser(userInfo);
    }

    fetchUser();
  }, [])

  const getUserInfo = async (token) => {
    try {
      const response = await axiosInstance.get("/users/auth/get-user", {
        headers: {
          authorization: `Bearer ${token}`,
         }
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  }
  console.log('user', user)
  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className="relative min-w-[1200px] bg-secondary min-h-screen flex items-center justify-center">
      {<Loading />}
      <div className="relative z-0 w-[1200px] min-h-screen flex flex-col mx-auto">
        <div className="flex fixed left-0 top-0 w-full bg-background items-center justify-center z-50">
          <div className="w-[1200px] h-12 flex items-center justify-between">
            <Link to='/dashboard'>
              <img src={SVGBlog} width={'32px'} />
            </Link>
            <div className='flex h-[32px] w-[32px] rounded-full justify-center items-center font-bold text-background bg-foreground'>
            {getInitials(user?.name) ?? "Loading..."}
            </div>
            <div>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-grow mt-12">
          <div className="w-[200px] bg-secondary h-[calc(100vh-48px)] text- flex items-center justify-center sticky top-12">
            Left Sidebar
          </div>

          <div className="flex-grow h-[calc(100vh-48px)] overflow-y-auto flex items-center justify-center">
            <div className="w-full">
              <div className="h-[2000px] bg-gray-300 top-12 flex flex-col items-center justify-center scrollbar">
                <p>Main Content</p>
              </div>
            </div>
          </div>

          <div className="w-[200px] bg-secondary h-[calc(100vh-48px)] flex items-center justify-center sticky top-12">
            Right Sidebar
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard