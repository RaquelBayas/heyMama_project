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
import { Link, useNavigate } from "react-router-dom";
import { getChat, newChat } from "../../services/chatService";

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

  const user = JSON.parse(localStorage.getItem("user")!);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");
  const [isFriend, setIsFriend] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [friendReq, setFriendReq] = useState<FriendRequest[]>([]);
  const [friends, setFriends] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const navigate = useNavigate(); 

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
      let data;
      let dataUser;
      console.log('userId.',(userId),'- logged', (loggedUser.id));
      if(parseInt(userId) === loggedUser.id) {
        data = await getUserById(loggedUser.id);
        dataUser = await getFromDataUser(loggedUser.id);
      } else {
        data = await getUserById(userId);
        dataUser = await getFromDataUser(userId);
      }
     
      const name = data.data[0].name + " " + data.data[0].surname;
      setName(name);
      setBio(dataUser.data[0].biography);
      console.log('1.',dataUser.data[0].avatar)
      dataUser.data[0].avatar ? setPhoto(dataUser.data[0].avatar.slice(".")[0]) : setPhoto('');
      console.log(photo)
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

  useEffect(() => {
    const fetchData = async () => {
      getListReq(friendReq);
    };

    fetchData();
  }, [friendReq]);

  async function getListReq(list) {
    const names = {
      id: 0,
      fullname: "",
    };
    for (const req of list) {
      const response = await getUserById(req.user_id);
      response.data.forEach((value) => {
        names.id = req.user_id;
        names.fullname = value.name + " " + value.surname;
      });
    }
    setUserNames(names);
  }

  async function getListFriends(list) {
    const names = {
      id: 0,
      fullname: "",
    };
    for (const req of list) {
      let response;
      if (parseInt(user.id) === req.user_id) {
        response = await getUserById(req.user2_id);
        response.data.forEach((value) => {
          names.id = req.user2_id;
          names.fullname = value.name + " " + value.surname;
        });
      } else {
        response = await getUserById(req.user_id);
        response.data.forEach((value) => {
          names.id = req.user_id;
          names.fullname = value.name + " " + value.surname;
        });
      }      
    }
    setUserNames(names);
  }

  async function handleNewChat() {
    console.log('user1.',user.id,'user2.',userId);
    try {
      const result = await getChat(userId);
      console.log('result.',result);
      if(!result) {
        try {
          await newChat(user.id,userId);
        } catch(error) {
          Swal.fire({
            title: "Oops...",
            icon: "error",
            text: "Ha ocurrido un error al crear el chat",
          });
        }
      } else {
        navigate('/chat');
      }
    } catch(error){
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Ha ocurrido un error al obtener el chat",
      });
    }    
    navigate('/chat');
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

  useEffect(() => {
    const handleGetFriends = async (id: number) => {
      const result = await getFriends(id);
      setFriends(result.data);
    };
    handleGetFriends(loggedUser.id);
  }, [loggedUser.id]);

  useEffect(() => {
    getListFriends(friends);
  }, [friends]);

  return (
    <div className="flex flex-col justify-center gap-12 p-8 text-center align-middle bg-white rounded-md h-fit w-fit">
      <img
        src={
          photo !== ''
            ? `http://localhost:5000/users/avatar/${photo}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&usqp=CAU"
        }
        alt="avatar"
        className="max-w-[8rem] mx-auto rounded-full cursor-pointer"
      />

      <div className="flex flex-col justify-around w-64 h-64 gap-4 text-left">
        <h1 className="text-lg text-center">{name}</h1>
        <p className="text-center text-md ">{bio}</p>

        <div className="mx-auto">
          <div className="bottom-0 flex justify-center gap-4 mx-auto align-middle ">
            <button onClick={handleNewChat} className="p-2 mt-2 rounded-md bg-primary w-fit">
              Mensajes
            </button>
            {loggedUser.id === parseInt(userId) ? (
              <button
                onClick={openModal2}
                className="p-2 mt-2 rounded-md bg-primary w-fit"
              >
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
              title="modalFriends"
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
                    <Link to={`/profile/${userNames["id"]}`}>
                      <span onClick={closeModal2}>{userNames["fullname"]}</span>
                    </Link>

                    <div className="flex gap-4 flex-end">
                      <button className="p-2 mx-auto rounded-md bg-primary w-fit">
                        Eliminar
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
    </div>
  );
}

export default ProfileCard;
