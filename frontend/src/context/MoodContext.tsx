import { ReactNode, createContext, useState, useEffect } from "react";
import { MoodData } from "../models/MoodData";
import { getMood } from "../services/moodService.js";

interface MoodContextProps {
    children: ReactNode
}

export interface MoodContextValue {
    moodData: MoodData[];
    updateMoodData: (newMood: MoodData) => void;
  }

const MoodContext = createContext<MoodContextValue|undefined>(undefined);

function MoodProvider({ children }: MoodContextProps) {
    const [moodData, setMoodData] = useState<MoodData[]>([]);
  
    useEffect(() => {
      // Realiza una llamada a la base de datos para obtener los datos iniciales
      const fetchData = async () => {
        try {
          const initialData = await getMood();
          setMoodData(initialData.data);
        } catch (error) {
          console.error('Se ha producido un error al obtener los datos', error);
        }
      };
      fetchData();
    }, []); 
    const updateMoodData = (newMood: MoodData) => {
      if (!moodData.some((mood) => mood.mood_id === newMood.mood_id)) {
        setMoodData((prevMoodData) => [...prevMoodData, newMood]);
      }
    };
    return (
      <MoodContext.Provider value={{ moodData, updateMoodData }}>
        {children}
      </MoodContext.Provider>
    );
}

export default MoodProvider;
export {MoodContext};