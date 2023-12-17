import { useState, useEffect } from "react";
import { getUserById } from "../../services/userService";
import { getFromDataUser } from "../../services/profileService";

interface UserData {
    username: string;
    name: string;
    surname: string;
    phone: string;
}

function ProfileSetting(){

    const [userData, setUserData] = useState<UserData>({
        username:'',
        name: '',
        surname:'',
        phone:'',
    });

    const [bioAndAvatar, setBioAndAvatar] = useState({
        biography:'',
        avatar:'',
    });

    const user = JSON.parse(localStorage.getItem("user")!);

    useEffect(() => {
        async function getUserData() {
            const data = await getUserById(user!.id);
            
            const dataUser = await getFromDataUser(user!.id);

            const username = data.data[0].username;
            const name = data.data[0].name;
            const surname = data.data[0].surname;
            const phone = data.data[0].phone;

            const biography = dataUser.data[0].biography;
            const avatar = dataUser.data[0].avatar;
            
            setUserData({
                username,
                name, 
                surname,
                phone,
            })

            setBioAndAvatar({
                biography,
                avatar,
            })
        }
        getUserData();
    },[])

    async function handleProfileChange (e:  React.ChangeEvent<HTMLInputElement>){
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })

        setBioAndAvatar({
            ...bioAndAvatar,
            [e.target.name]:e.target.value
        })
    }

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
         
        console.log('cargando form');

        const baseUrl = `http://localhost:5000/users/setting/${user.id}`;
        
        try {
            const resp = await fetch(baseUrl,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userData.username,
                    name: userData.name,
                    surname: userData.surname,
                    phone: userData.phone,
                    biography: bioAndAvatar.biography,
                    avatar: bioAndAvatar.avatar,
                }),
            });

            const data = await resp.json();

            if (resp.ok){
                console.log(data);
            } else{
                console.error('Error al actualizar perfil')
            }
        } catch (error) {
            console.error(error);
        }

        console.log('final form');
    }

    return(
        <div className='flex flex-col gap-5 text-xl ml-14'>
            <h1 className='mt-10 mb-4 text-4xl tracking-wider text-center uppercase lg:text-start lg:ml-10'>Ajustes</h1>

            <form onSubmit={(e)=> {handleSubmit(e)}}
                className="flex flex-col justify-start gap-8"
            >
                <h3>Foto de perfil:</h3>
                <label htmlFor="avatar">
                    <input 
                        type="file" 
                        accept='image/*' 
                        id='avatar'
                        name="avatar"
                        className='hidden' />
                    <img 
                        src={bioAndAvatar.avatar ? bioAndAvatar.avatar : "./assets/avatar-person.svg"} alt="avatar" 
                        className='ml-4 max-w-[6rem] cursor-pointer' 
                    />
                </label>

                <div 
                    className="flex flex-col">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        name="username" 
                        value={userData.username}
                        onChange={handleProfileChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        name="name"
                        value={userData.name}
                        onChange={handleProfileChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
                </div>
            
                <div className="flex flex-col">
                    <label htmlFor="name">Apellido:</label>
                    <input 
                        name="surname"
                        value={userData.surname}
                        onChange={handleProfileChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none' />
                </div>
            
                <div className="flex flex-col">
                    <label htmlFor="name">Teléfono:</label>
                    <input 
                        name="phone"
                        value={userData.phone}
                        onChange={handleProfileChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="biography">Biografía:</label>
                    <input 
                        name="biography"
                        value={bioAndAvatar.biography}
                        onChange={handleProfileChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
                </div>

                <button
                    type="submit"
                    className="p-2 w-[200px] bg-background border-2 border-black rounded-xl hover:bg-lime-400 hover:scale-110"
                >
                    Actualizar perfil
                </button>
            </form>
        </div>                
    )
}

export default ProfileSetting;