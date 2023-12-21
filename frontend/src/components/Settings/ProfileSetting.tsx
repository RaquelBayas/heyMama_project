import { useState, useEffect } from "react";
import { getUserById } from "../../services/userService";
import { getFromDataUser } from "../../services/profileService";

interface UserData {
    username: string;
    name: string;
    surname: string;
    phone: string;
    biography: string;
    avatar: string;
}

function ProfileSetting(){

    const [settingData, setSettingData] = useState<UserData>({
        username:'',
        name: '',
        surname:'',
        phone:'',
        biography:'',
        avatar:'',
    });

    const user = JSON.parse(localStorage.getItem("user")!);

    useEffect(() => {
        async function getUserData() {
            const data = await getUserById(user?.id);
    
            const dataUser = await getFromDataUser(user?.id);

            const username = data.data[0].username;
            const name = data.data[0].name;
            const surname = data.data[0].surname;
            const phone = data.data[0].phone;

            const biography = dataUser.data[0].biography;
            const avatar = dataUser.data[0].avatar;

            setSettingData({
                username,
                name, 
                surname,
                phone,
                biography,
                avatar,
            })
        }
        getUserData();
    },[user?.id])

    async function handleChange (e:  React.ChangeEvent<HTMLInputElement>){
        setSettingData({
            ...settingData,
            [e.target.name]:e.target.value
        })
    }

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const baseUrl = `http://localhost:5000/users/setting/${user.id}`;

        const formData = new FormData(e.target as HTMLFormElement);
        
        try {
            const resp = await fetch(baseUrl,{
                method:'PUT',
                body: formData,
            });

            const data = await resp.json();
            console.log('otra dataaa', data);
            

            if (!resp.ok){
                return console.error(data.error)
            }

            console.log('Cambiado!');
            
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className='flex flex-col gap-5 text-xl ml-14'>
            <h1 className='mt-10 mb-4 text-4xl tracking-wider text-center uppercase lg:text-start lg:ml-10'>Ajustes</h1>

            <form onSubmit={handleSubmit}
                className="flex flex-col justify-start gap-8"
            >
                <h3 className="">Foto de perfil:</h3>
                <div className="flex flex-col gap-3 mx-auto max-w-[4-rem]">
                    <label htmlFor="avatar">
                        <input
                            type="file"
                            id="avatar"
                            accept='image/*'
                            name="avatar"
                            className='hidden' />
                        <img
                            src={settingData.avatar ? `http://localhost:5000/users/avatar/${settingData.avatar}` : "../../../assets/avatar-person.svg"} alt="avatar"
                            className='ml-4 h-60 max-w-[4-rem] rounded-full border-2 border-marron cursor-pointer'
                        />
                    </label>
                </div>
                <div 
                    className="flex flex-col">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        name="username" 
                        value={settingData.username}
                        onChange={handleChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        name="name"
                        value={settingData.name}
                        onChange={handleChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
                </div>
            
                <div className="flex flex-col">
                    <label htmlFor="name">Apellido:</label>
                    <input 
                        name="surname"
                        value={settingData.surname}
                        onChange={handleChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none' />
                </div>
            
                <div className="flex flex-col">
                    <label htmlFor="name">Teléfono:</label>
                    <input 
                        name="phone"
                        value={settingData.phone}
                        onChange={handleChange}
                        className='w-[400px] text-gray-500 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none'/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="biography">Biografía:</label>
                    <input 
                        name="biography"
                        value={settingData.biography}
                        onChange={handleChange}
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