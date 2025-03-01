import React from 'react'
import { ProfileDropDown } from './profile-drop'
import { Link } from 'react-router-dom'
import SVGBlog from '@/assets/blog.svg'

const Navigation = () => {
  return (
    <div className="flex fixed left-0 top-0 w-full bg-background items-center justify-center z-50">
      <div className="w-full h-12 px-5 flex items-center justify-between">
        <Link to='/dashboard'>
          <img src={SVGBlog} width={'32px'} />
        </Link>
        <ProfileDropDown />
      </div>
    </div>
  )
}

export default Navigation