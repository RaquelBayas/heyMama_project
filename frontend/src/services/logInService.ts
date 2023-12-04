async function logInUser (email:string , password:string){
    const baseUrl = 'http://localhost:5000/login';

    try {
        const resp = await fetch(baseUrl, {
            method:'POST',
            body: JSON.stringify({email, password})
        })
        return await resp.json();
    } catch (error) {
        console.error(error)
        return { 
            error: 'Error en login' 
        };
    }
}

export default logInUser;