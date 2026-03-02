import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../utilis/constants'
import { removeUser } from '../utilis/userSlice'

const NavBar = () => {
  const userState = useSelector((store) => store.user)
  const user = userState?.user
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = async () => {
   

    try{
const res=await axios.post(
  URL + "/logout",
  {},
  { withCredentials: true }
);
     
      dispatch(removeUser())
      navigate('/login');
    }
    catch(e){
      console.error("Logout error:", e);
    }
  }

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl font-bold text-white">🕵🏼DevTinder</Link>
      </div>
      {user && (<div className="flex gap-2">
                   <div> Welcome, {user?.firstName || user?.first_name || user?.name || user?.username || user?.email}</div>

          <div className="dropdown dropdown-end mr-5 flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
<img
  alt="User avatar"
  src={user?.photoUrl || 'https://i.pravatar.cc/150?img=3'}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://i.pravatar.cc/150?img=3";
  }}
/>                </div>
              </div>
              <span className="hidden sm:inline-block font-medium">{user?.firstName || user?.first_name || user?.name || user?.username || user?.email}</span>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
       
      </div>)}
    </div>
  )
}

export default NavBar
