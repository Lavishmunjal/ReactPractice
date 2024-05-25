import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(Usercontext);
  //   console.log(user.username);

  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
