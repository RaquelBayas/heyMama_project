import { MoodData } from "../models/MoodData";
import { getUserData } from "./authService";

interface MoodResponse {
    error: string
}
async function addMood(moodData: MoodData){
    const baseUrl = 'https://heymamaproject.onrender.com/mood/addMood';

    try {
        const resp = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(moodData)
        });
        if (!resp.ok) {
          const errorResponse: MoodResponse = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (e) {
        console.error(e);
        return { error: 'Error during mood register' };
    }
}

async function getMood(){
    const {id}  = JSON.parse(localStorage.getItem('user')!);
    const baseUrl = 'https://heymamaproject.onrender.com/mood/getMood/'+id;

    try {
        const resp = await fetch(baseUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!resp.ok) {
          const errorResponse: MoodResponse = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (e) {
        console.error(e);
        return { error: 'Error getting mood record' };
    }
}


// POST ADD MOOD
// DELETE MOOD
// GET MOOD

export {addMood, getMood};