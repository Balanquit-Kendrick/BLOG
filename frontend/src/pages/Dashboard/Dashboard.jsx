import Loading from '@/components/loading'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className="relative min-w-[1200px] bg-blue-400 min-h-screen flex items-center justify-center">
      {<Loading />}
      
      <div className="relative z-0 w-[1200px] min-h-screen flex flex-col mx-auto">
        <div className="flex fixed left-0 top-0 w-full bg-red-300 items-center justify-center z-50">
          <div className="w-[1200px] h-12 flex items-center justify-center border">
            Nav
          </div>
        </div>

        <div className="flex flex-row flex-grow mt-12">
          <div className="w-[200px] bg-green-300 h-[calc(100vh-3rem)] border flex items-center justify-center sticky top-12">
            Left Sidebar
          </div>

          <div className="flex-grow h-screen overflow-y-auto flex items-center justify-center border">
            <div className="w-full p-4">
              <div className="h-[2000px] top-12 flex flex-col items-center justify-center">
                <p>Main Content</p>
              </div>
            </div>
          </div>

          <div className="w-[200px] bg-green-300 h-[calc(100vh-3rem)] border flex items-center justify-center sticky top-12">
            Right Sidebar
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard