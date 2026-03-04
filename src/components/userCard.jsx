import axios from "axios"

import { URL } from "../utilis/constants"

import { useDispatch } from "react-redux"
import { removeFeed } from "../utilis/feedSlice"




const UserCard = ({ user }) => {
  if (!user) return null

  const { firstName, lastName, photoUrl, email, age, gender, about } = user
  const dispatch = useDispatch()

  const handleSendrequest = async (status, _id) => {

    try {
      const res = await axios.post(URL + "/request/send/" + status + "/" + _id, {

      }, {
        withCredentials: true
      })

      dispatch(removeFeed(_id))
    }
    catch (e) {
      res.status(400).json({ error: e.message })
    }
  }


  return (
    <div className="card bg-base-200 w-96 shadow-xl">
      <figure>
        <img
          src={photoUrl || 'https://i.pravatar.cc/150?'}
          alt="profile"
          widht="100%"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName} {lastName}</h2>
        {age && <p>{age}</p>}
        {gender && <p>{gender}</p>}
        {about && <p>{about}</p>}

        <p>{email}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary bg-base-200"
            onClick={() => handleSendrequest("interested", user._id)}>Accept</button>
          <button className="btn btn-secondary" onClick={() => handleSendrequest("ignore", user._id)}>Not Interested</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard