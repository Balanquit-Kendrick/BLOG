import React, { useState } from 'react'
import { Button } from './ui/button'
import AddPostModal from './add-post-modal';


const Main = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-100">
      <div className="h-[200vh] flex justify-center items-center content-center">
        <div>
          <Button onClick={() => setIsModalOpen(true)}>
            Add New Post
          </Button>
          <AddPostModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </div>
      </div>
    </div>
  )
}

export default Main