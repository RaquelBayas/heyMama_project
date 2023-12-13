import { useNavigate } from "react-router-dom";


function IsLogged() {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const data = { 'token': token };

    fetch('http://localhost:5000/users/isLogIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(resp => resp.json())
        .then(data => {
            if (!data.error) {
                console.log();

            }
        })
        .catch(() => { return navigate('/login'); });
}

export default IsLogged;