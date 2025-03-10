import React from 'react'
import { Button } from './ui/button'

const Main = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100">
      <div className="h-[200vh] flex justify-center items-center content-center">
        <div>
          <Button>Add Post</Button>
        </div>
      </div>
    </div>
  )
}

export default Main