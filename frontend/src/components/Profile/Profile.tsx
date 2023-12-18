import React from "react";
import ProfileCard from "./ProfileCard";
import Timeline from "../Timeline/Timeline";
import Search from "../Search";
import Menu from "../Menu";
import { useParams } from "react-router-dom";

function Profile() {
  const { user_id } = useParams();

  const loggedUser = JSON.parse(localStorage.getItem("user")!);

  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden">
      <div>
      <Menu />
      </div>
      <div className="grid w-screen grid-rows-[5em_1fr]">
        <div className="z-10 flex flex-col justify-center mt-3 mb-3">
          <div className="z-40 flex justify-evenly">
            <Search />
          </div>
          <div className="w-full mt-2 mb-2 border-b border-secondary"></div>
        </div>

        <main className="flex flex-row gap-4 font-Montserrat ml-[3.5rem]">
          <ProfileCard userId={user_id} loggedUser={loggedUser}/>
          <Timeline userId={user_id} loggedUser={loggedUser}/>
        </main>
      </div>
    </div>
  );
}

export default Profile;
