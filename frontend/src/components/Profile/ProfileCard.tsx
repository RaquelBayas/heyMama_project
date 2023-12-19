import { useEffect, useState } from "react";
import { getUserById } from "../../services/userService";
import { getFromDataUser } from "../../services/profileService";
import {
  addFriend,
  checkFriends,
  getFriendRequests,
  getFriends,
} from "../../services/friendsService";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { FriendRequest } from "../../models/FriendRequest";

function ProfileCard({ userId, loggedUser }) {
  const customStyles = {
    content: {
      width: "50%",
      height: "50%",
      margin: "auto",
      borderRadius: "8px",
      overflow: "auto",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");
  const [isFriend, setIsFriend] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [friendReq, setFriendReq] = useState<FriendRequest[]>([]);
  const [friends, setFriends] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  useEffect(() => {
    async function getData() {
      const data = await getUserById(userId);
      const dataUser = await getFromDataUser(userId);

      const name = data.data[0].name + " " + data.data[0].surname;
      setName(name);
      setBio(dataUser.data[0].biography);
      setPhoto(dataUser.data[0].avatar);
      console.log(photo);
    }
    getData();

    const checkFriendship = async () => {
      const friends = await checkFriends(loggedUser, userId);
      setIsFriend(friends);
    };

    checkFriendship();
  }, [loggedUser, photo, userId]);

  useEffect(() => {
    const getFriendReq = async () => {
      const results = await getFriendRequests(loggedUser);
      setFriendReq(results.data);
    };
    getFriendReq();
  }, [loggedUser]);

  const [userNames, setUserNames] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      getListReq(friendReq);
    };

    fetchData();
  }, [friendReq]);

  async function getListReq(list) {
    const names = {};
    for (const req of list) {
      const response = await getUserById(req.user_id);
      response.data.forEach((value) => {
        names[req.user_id] = value.name + " " + value.surname;
        console.log('listreq,names.',names)
      });
    }
    setUserNames(names);
    console.log('names.listreq',names)
  }

  async function getListFriends(list) {
    const names = {};
    
    for (const req of list) {
      const response = await getUserById(req.user2_id);
      
      response.data.forEach((value) => {
        console.log('names.',names)
        names[req.user2_id] = value.name + " " + value.surname;
        console.log('lista,',names)
      });
    }
    setUserNames(names);
    
  }
  
  const handleAddFriend = async () => {
    await addFriend(loggedUser, userId);
    setIsFriend(true);
    Swal.fire({
      title: "¡Solicitud de amistad enviada!",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  };

  useEffect(()=> {
    const handleGetFriends = async(id: number) => {
      const result = await getFriends(id);
      console.log('result-friends.',result.data);
      setFriends(result.data);
    };
    handleGetFriends(loggedUser.id);
    
  }, [loggedUser.id]);

  useEffect(() => {
    getListFriends(friends);
  }, [friends]);

  useEffect(()=> {
    console.log(userNames)
  })

  return (
    <div className="flex flex-col justify-center gap-12 p-8 text-center align-middle bg-white rounded-md h-fit w-fit">
      <img
        className="w-32 mx-auto rounded-full h-fit"
        src={
          photo && photo.trim() !== ""
            ? photo
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        }
        alt=""
      />

      <div className="flex flex-col w-64 h-64 gap-4 text-left">
        <h1 className="text-lg ">{name}</h1>
        <p className="text-md ">{bio}</p>

        <div className="relative bottom-0 flex gap-4 mx-auto align-middle">
          <button className="p-2 mt-2 rounded-md bg-primary w-fit">
            Mensajes
          </button>
          {loggedUser.id === parseInt(userId) ? (
            <button onClick={openModal2} className="p-2 mt-2 rounded-md bg-primary w-fit">
              Amigos
            </button>
          ) : !isFriend ? (
            <button
              className="p-2 mt-2 rounded-md bg-primary w-fit"
              onClick={handleAddFriend}
            >
              Añadir amigo
            </button>
          ) : (
            <button className="p-2 mt-2 rounded-md bg-primary w-fit">
              Amigos
            </button>
          )}
          <Modal
            title='modalFriends'
            isOpen={isModal2Open}
            onRequestClose={closeModal2}
            ariaHideApp={false}
            style={customStyles}
            contentLabel="Lista de amigos"
          >
            <div className="flex flex-col justify-around">
              <h2>Lista de amigos</h2>
              {friends.map((value, index) => (
                <div
                  className="flex items-center justify-between gap-2 p-2 mt-2 align-middle border-2 border-primary"
                  key={index}
                >
                  
                  <span>{userNames[value]}</span>
                  <div className="flex gap-4 flex-end">
                    <button className="p-2 mx-auto rounded-md bg-primary w-fit">
                      Aceptar
                    </button>
                    <button className="p-2 mx-auto rounded-md bg-primary w-fit">
                      Rechazar
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex align-bottom flex-end">
                <button
                  className="p-2 mx-auto rounded-md bg-primary w-fit"
                  onClick={closeModal2}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="mx-auto">
          {loggedUser.id === parseInt(userId) && (
            <button
              className="p-2 mx-auto mt-1 rounded-md bg-primary w-fit"
              onClick={openModal}
            >
              Solicitudes de amistad
            </button>
          )}

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={customStyles}
            contentLabel="Solicitudes de Amistad"
          >
            <div className="flex flex-col justify-around">
              <h2>Solicitudes de Amistad</h2>
              {friendReq.map((value, index) => (
                <div
                  className="flex items-center justify-between gap-2 p-2 mt-2 align-middle border-2 border-primary"
                  key={index}
                >
                  <span>{userNames[value.user_id]}</span>
                  <div className="flex gap-4 flex-end">
                    <button className="p-2 mx-auto rounded-md bg-primary w-fit">
                      Aceptar
                    </button>
                    <button className="p-2 mx-auto rounded-md bg-primary w-fit">
                      Rechazar
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex align-bottom flex-end">
                <button
                  className="p-2 mx-auto rounded-md bg-primary w-fit"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
