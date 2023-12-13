import React, { useEffect } from 'react'
import MoodTracker from './MoodTracker'
import MoodRecord from './MoodRecord'
import Menu from './Menu'
import Search from './Search'
import { getMood } from '../services/moodService'
import { useState } from 'react'
import MoodRecordRow from './MoodRecordRow'
import { MoodData } from '../models/MoodData'

function MoodPage() {
  const [data, setData] = useState<MoodData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await getMood();
        setData(initialData.data);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
    
    fetchData();
  }, [])
  return (
    
    <div className='grid w-screen h-screen grid-cols-[auto,1fr] overflow-hidden bg-background'>
  <div><Menu /></div>
  
  <div className="grid w-screen grid-cols-1 grid-rows-[5em,1fr]">
    <div className='flex flex-col justify-center mt-3 mb-3'>
      <div className='flex justify-evenly'><Search /></div>
      <div className='w-full mt-2 mb-2 border-b border-secondary'></div>
    </div>  
    <div className='mx-auto h-fit w-full flex flex-row ml-4 justify-evenly'>
      <div className=''>
      <MoodRecord/>
      <MoodTracker />
      </div>
      <div className=''>
        <div className='w-full h-fit text-center overflow-y-auto '>
          <h1 className='text-xl font-Montserrat m-4'>Historial de emociones</h1>
          {           
            data.map((item:MoodData) =>{
              return <MoodRecordRow moodDate={item.mood_date} moodType={item.mood_type_id}/>
            }  
            )
          }

        </div>
      </div>      
    </div>  
    
  </div>
</div>

  )
}

export default MoodPage