import React, { useEffect, useState } from 'react'
import { Progress } from './ui/progress'

const Loading = () => {
  const [progress, setProgress] = useState(13)
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(80)
        setTimeout(() => 
          setLoaded(true), 
        500)
        }
      , 1000)
      return () => {
        clearTimeout(timer)
      }
    }, [])

  return (
    <div>
      {!loaded && (
        <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="min-w-60">
            <Progress value={progress} className="w-[100%]" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Loading