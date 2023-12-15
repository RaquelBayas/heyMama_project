import React, { useContext, useEffect, useState } from 'react'
import { MoodData } from '../models/MoodData';
import { getMood } from '../services/moodService';
import MoodRecordRow from './MoodRecordRow';
import MoodProvider, { MoodContextValue, MoodContext } from '../context/MoodContext';

function MoodRecord() {
    const [data, setData] = useState<MoodData[]>([]);
    const {moodData} = useContext(MoodContext) as MoodContextValue;   
  
  useEffect(() => {
    const fetchData = async () => {
        try {
          const initialData = await getMood();
          setData(initialData.data);
  
        } catch (error) {
          console.error('Error fetching initial data:', error);
        }
      };
      console.log('mood ha cambiado + ', crypto.randomUUID(),moodData);
    fetchData();   
  }, [moodData]);

  
  return (
    <MoodProvider>
        <div className='w-full h-4/5 text-center overflow-y-auto '>
        <h1 className='text-xl font-Montserrat m-4'>Historial de emociones</h1>
        {           
        data.map((item:MoodData, index) =>{
          return <MoodRecordRow key={index} moodDate={item.mood_date} moodType={item.mood_type_id}/>
        }  
        )
      }
    </div>
    </MoodProvider>
  );
}

export default MoodRecord;