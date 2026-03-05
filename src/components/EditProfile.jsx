import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { URL } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("user.firstName");
  const [lastName, setLastName] = useState("user.lastName");
  const [photoUrl, setPhotoUrl] = useState("user.photoUrl");
  const [age, setAge] = useState("user.age");
  const [gender, setGender] = useState("user.gender");
  const [about, setAbout] = useState("user.about");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  // 🔑 SYNC STATE WHEN USER COMES FROM REDUX
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setPhotoUrl(user.photoUrl || "");
      setAge(user.age || "");
      setGender(user.gender || "");
      setAbout(user.about || "");
    }
  }, [user]);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );

      if (res?.data?.data) {
        dispatch(addUser(res.data.data));
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      setError(err?.response?.data?.message || err?.response?.data || "Something went wrong");
    }


  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>

              <input
                className="input input-bordered my-2"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                className="input input-bordered my-2"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <input
                className="input input-bordered my-2"
                placeholder="Photo URL"
                name="photoUrl"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />

              <input
                className="input input-bordered my-2"
                placeholder="Age"
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <input
                className="input input-bordered my-2"
                placeholder="Gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />

              <input
                className="input input-bordered my-2"
                placeholder="About"
                name="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />

              {error && <p className="text-red-500">{error}</p>}

              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
      </div>

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;