import { LogInForm } from "../models/LogInForm";

interface LogInResponse {
    error: string
}

async function logInUser (logInData: LogInForm):Promise<LogInResponse>{
    const baseUrl = 'http://localhost:5000/users/login';

    try {
        const resp = await fetch(baseUrl, {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(logInData)
        });
        
        if (!resp.ok) {
            const errorResponse: LogInResponse = await resp.json();
            throw new Error(`Server error: ${errorResponse.error}`)
        }

        return await resp.json(); 
    } catch (error) {
        console.error(error)
        return { 
            error: 'Error en login' 
        };
    }
}

export default logInUser;