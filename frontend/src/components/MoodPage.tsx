import React from 'react'
import MoodTracker from './MoodTracker'
import MoodRecord from './MoodRecord'
import Menu from './Menu'
import Search from './Search'

function MoodPage() {
  return (
    
    <div className='grid w-screen h-screen grid-cols-[auto,1fr] overflow-hidden bg-background'>
  <div><Menu /></div>
  
  <div className="grid w-screen grid-cols-1 grid-rows-[5em,1fr]">
    <div className='flex flex-col justify-center mt-3 mb-3'>
      <div className='flex justify-evenly'><Search /></div>
      <div className='w-full mt-2 mb-2 border-b border-secondary'></div>
    </div>  
    <div className='mx-auto bg-white h-fit w-fit'>
      <MoodRecord/>
      <MoodTracker />
    </div>      
  </div>
</div>

  )
}

export default MoodPage