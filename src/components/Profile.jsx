import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const storeUser = useSelector((state) => state.user);
  const user = storeUser?.data || storeUser;

  if (!user) return <div>Loading profile...</div>;

  return (
    <div>
      <EditProfile user={user} />
    </div>
  );
};

export default Profile;