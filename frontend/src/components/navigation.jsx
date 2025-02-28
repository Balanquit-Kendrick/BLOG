import React from 'react'
import { DropdownMenuDemo } from './profile-drop'
import { Link } from 'react-router-dom'
import SVGBlog from '@/assets/blog.svg'

const Navigation = () => {
  return (
    <div className="flex fixed left-0 top-0 w-full bg-background items-center justify-center z-50">
      <div className="w-[1200px] h-12 px-10 flex items-center justify-between">
        <Link to='/dashboard'>
          <img src={SVGBlog} width={'32px'} />
        </Link>
        <DropdownMenuDemo />
      </div>
    </div>
  )
}

export default Navigation