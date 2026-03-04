import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { URL } from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err?.response?.status === 401 || err?.status === 401) {
        navigate("/login");
      } else {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;