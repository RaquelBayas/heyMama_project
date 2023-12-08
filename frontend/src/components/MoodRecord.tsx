import { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getMood } from '../services/moodService';
import { MoodData } from '../models/MoodData';

ChartJS.register(ArcElement, Tooltip, Legend);

function MoodRecord() {
    const [moodData, setMoodData] = useState<MoodData[]>([]);
    const [loading, setLoading] = useState(true);
    
    const data = {
        
        labels : ['Feliz', 'Bien', 'Regular', 'Mal', 'Triste'],

        datasets: [
            {
             label: '# of Votes',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
             ],
             borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
             ],
             borderWidth: 1,
           }
        ]
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const moodInfo = await getMood();
            console.log(moodInfo.data)
            setMoodData(moodInfo.data);
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
      }, [moodData]);
    
  return (
    <div>
        { loading ? (<p>Cargando datos... </p>) :  ( <Pie data={data} />)}
    </div>
  )
}

export default MoodRecord