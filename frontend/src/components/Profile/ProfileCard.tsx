import { useEffect, useState } from "react";
import { getUserById } from "../../services/userService";
import { getFromDataUser } from "../../services/profileService";

function ProfileCard() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState('');

  const user = JSON.parse(localStorage.getItem("user")!);

  useEffect(() => {
    async function getData() {
        const data = await getUserById(user!.id);
        const dataUser = await getFromDataUser(user!.id);
        console.log(dataUser.data[0]);
        const name = data.data[0].name + " " + data.data[0].surname;
        setName(name);
        setBio(dataUser.data[0].biography);
        setPhoto(dataUser.data[0].avatar);
        console.log(photo);
      }
    getData();
  }, []);


  return (
    
      <div className="flex flex-row justify-center gap-4 p-4 text-center align-middle bg-white rounded-md h-fit w-fit">
        
        <img className="w-32 mx-auto rounded-full h-fit" src={ photo && photo.trim() !== ''
      ? photo : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'} alt="" />

        <div className="flex flex-col w-64 gap-2">
        <h1 className="text-lg ">{name}</h1>
        <p className="text-md">{bio}</p>
        </div>
    </div>
    
  );
}

export default ProfileCard;
