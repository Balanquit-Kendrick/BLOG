import Loading from '@/components/loading'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className="relative min-w-[1200px] min-h-screen flex items-center justify-center">
      {<Loading />}
      <div className="relative z-0 min-w-[1200px] min-h-screen flex items-center justify-center flex-col">
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
      </div>
    </div>
  )
}

export default Dashboard