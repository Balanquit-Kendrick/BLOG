import React from 'react'

const Main = () => {
  return (
    <div className="flex-grow h-[calc(100vh-48px)] overflow-y-auto flex items-center justify-center">
      <div className="w-full">
        <div className="h-[2000px] bg-gray-300 top-12 flex flex-col items-center justify-center scrollbar">
          <p>Main Content</p>
        </div>
      </div>
    </div>
  )
}

export default Main