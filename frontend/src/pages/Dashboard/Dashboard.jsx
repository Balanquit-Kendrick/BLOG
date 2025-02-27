import Loading from '@/components/loading'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SVGBlog from '@/assets/blog.svg'
import './dashboard.css'
import axiosInstance from '@/utils/axiosInstance'
import { Button } from '@/components/ui/button'
import { getInitials } from '@/utils/helper'
import { DropdownMenuDemo } from '@/components/profile-drop'

const Dashboard = () => {

  return (
    <div className="relative min-w-[1200px] bg-secondary min-h-screen flex items-center justify-center">
      {<Loading />}
      <div className="relative z-0 w-[1200px] min-h-screen flex flex-col mx-auto">
        <div className="flex fixed left-0 top-0 w-full bg-background items-center justify-center z-50">
          <div className="w-[1200px] h-12 px-10 flex items-center justify-between">
            <Link to='/dashboard'>
              <img src={SVGBlog} width={'32px'} />
            </Link>
            <DropdownMenuDemo />
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