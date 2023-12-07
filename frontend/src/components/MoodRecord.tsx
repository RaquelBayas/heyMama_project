import { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getMood } from '../services/moodService';
import { MoodData } from '../models/MoodData';

ChartJS.register(ArcElement, Tooltip, Legend);

function MoodRecord() {
    const [moodData, setMoodData] = useState([]);
    
    const data = {
        labels: moodData.map((mood: MoodData) => 
            mood.mood_type_id),

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
    
    

    
        if(moodData.length == 0) {
            const data1 = async() => {

                try {
                    const moodInfo = await getMood();
                    setMoodData(moodInfo.data);
                } catch (error) {
                    console.log(error);
                }
                
            }
            data1();
        }
    
  return (
    <div>
        <Pie data={data} />
    </div>
  )
}

export default MoodRecord