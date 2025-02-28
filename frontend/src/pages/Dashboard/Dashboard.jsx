import Loading from '@/components/loading'
import React from 'react'
import './dashboard.css'
import Navigation from '@/components/navigation'
import LeftSideBar from '@/components/left-sidebar'
import RightSideBar from '@/components/right-sidebar'

const Dashboard = () => {

  return (
    <div className="relative min-w-[1200px] bg-secondary min-h-screen flex items-center justify-center">
      {<Loading />}
      <div className="relative z-0 w-[1200px] min-h-screen flex flex-col mx-auto">
        <Navigation />

        <div className="flex flex-row flex-grow mt-12">
          <LeftSideBar />
          <Main />
          <RightSideBar />
        </div>
      </div>
    </div>

  )
}

export default Dashboard