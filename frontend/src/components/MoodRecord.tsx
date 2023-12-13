import { useState, useEffect, useContext } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getMood } from '../services/moodService';
import { MoodData } from '../models/MoodData';
import {MoodContext, MoodContextValue} from '../context/MoodContext';
import MoodProvider from '../context/MoodContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const moodTypeNames: Record<number, string> = {
  1: 'FELIZ',
  2: 'BIEN',
  3: 'REGULAR',
  4: 'MAL',
  5: 'TRISTE',
};
function MoodRecord() {
    const [loading, setLoading] = useState(true);
    const {moodData, updateMoodData} = useContext(MoodContext) as MoodContextValue;
    
    interface MoodData {
      //mood_id: number;
      user_id: number;
      //mood_date: string;
      mood_type_id: number;
    }

    const getMoodTypeName = (mood_type_id: number): string => {   
      return moodTypeNames[mood_type_id];
    };
    
    const calculatePercentage = (moodData: MoodData[]): { moodTypeName: string; percentage: number }[] => {
      const moodCount: Record<string, number> = {};
      moodData.forEach((mood) => {
        
        const moodTypeName = getMoodTypeName(mood.mood_type_id);
        moodCount[moodTypeName] = (moodCount[moodTypeName] || 0) + 1;
      });
    
      const totalMoods = moodData.length;
    
      const percentageData = Object.entries(moodCount).map(([moodTypeName, count]) => ({
        moodTypeName,
        percentage: (count / totalMoods) * 100,
      }));
    
      return percentageData;
    };
    
    const percentageData = calculatePercentage(moodData);

    const data = {
      labels: percentageData.map((entry) => entry.moodTypeName),

        datasets: [
            {
             label: '# of Votes',
             data: percentageData.map((entry) => entry.percentage),
             backgroundColor: [
               'rgba(251, 207, 232, 0.8)',
               'rgba(233, 213, 255, 0.8)',
               'rgba(250, 225, 195, 0.8)',
               'rgba(254, 202, 202, 0.8)',
               'rgba(191, 219, 254, 0.8)'
             ],
             borderColor: [
              'rgba(255, 99, 132, 1)',
              ' rgba(153, 102, 255, 1)',
              'rgba(255, 206, 86, 1)',
              '#eb3666',              
              '#4b76c0',
            ],
             borderWidth: 1,
           }
        ]
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getMood();
            //const arrayMoods: MoodData[] = [];
          
            const flattenedData = result.data.flat();
            console.log('flat.',result.data)
            if (flattenedData.length > 0) {
              updateMoodData(result.data);
            }
            console.log('fetch moodrecord:',result)
            //setMoodDataArray(result.data);
            //updateMoodData(arrayMoods)           
          } catch (error) {
            console.error('Error fetching mood data:', error);
          } finally {
            setLoading(false);
          }
        };
    
        // Solo fetchData si moodData está vacío
        if (moodData.length === 0) {
          fetchData();
        }
      }, [moodData,updateMoodData]);
    
  return (  
    <div>
          { loading ? (<p>Cargando datos... </p>) :  ( <Pie data={data} />)}    
    </div>
    
  )
}

export {moodTypeNames};
export default MoodRecord