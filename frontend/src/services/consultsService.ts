import { Consult } from "../models/Consult";

interface Response {
    error: string
}

async function addConsult(consult: Consult){
    const baseUrl = 'http://localhost:5000/consults/addConsult';

    try {
        const resp = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(consult)
        });
        if (!resp.ok) {
          const errorResponse: Response = await resp.json();
          throw new Error(`Server error: ${errorResponse.error}`);
        }
        return await resp.json();
    } catch (e) {
        console.error(e);
        return { error: 'Error in consult' };
    }
}

async function getConsult(user_id: number, professional_id: number) {
    const baseUrl = `http://localhost:5000/consults/${user_id}/${professional_id}`;
    try {
      const resp = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!resp.ok) {
        const errorResponse: Response = await resp.json();
        throw new Error(`Server error: ${errorResponse.error}`);
      }
      return await resp.json();
    } catch (e) {
      console.error(e);
      return { error: "Error checking consult" };
    }
  }

export {addConsult, getConsult};