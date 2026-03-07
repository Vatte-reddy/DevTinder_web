import React from 'react'

import { URL } from '../utilis/constants'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utilis/requestSlice'



const Requests = () => {
    const requests = useSelector((store) => store.request)

    const dispatch = useDispatch()

    const getRequest = async (status, _id) => {

        try {
            const res = await axios.post(URL + "/request/review/" + status + "/" + _id, {

            }, {
                withCredentials: true
            })

            dispatch(removeRequest(_id));
        }
        catch (e) {
            console.error("Error fetching requests:", e);
        }

    }

    const fetchRequest = async () => {
        try {
            const res = await axios.get(URL + "/user/requests", {
                withCredentials: true,
            })
            dispatch(addRequests(res?.data?.data))
        }
        catch (e) {
            console.error("Error fetching requests:", e);
        }
    }


    useEffect(() => {
        fetchRequest()
    }, [])


    if (!requests) return

    if (requests.length === 0) <h1>No request there</h1>;

    return (
        <div className="text-center my-10">
            <h1 className="text-2xl font-bold mb-6">Connections requests</h1>

            {requests.map((request) => {
                if (!request) return null;
                const { firstName, lastName, photoUrl, age, gender, about } = request.fromUserId || request;

                return (
                    <div
                        key={request._id || request.id || Math.random().toString()}
                        className="flex items-center bg-base-200 rounded-lg p-4 my-4 w-1/2 mx-auto"
                    >
                        <div>
                            <img
                                src={photoUrl}
                                alt={`${firstName} ${lastName}`}
                                className="w-20 h-20 rounded-lg bg-base-300 object-cover"
                            />
                        </div>
                        <div className="text-left mx-4">
                            <h2 className="font-bold text-lg">
                                {firstName} {lastName}
                            </h2>
                            <p>Age: {age}</p>
                            <p>Gender: {gender}</p>
                            <p>{about}</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn btn-primary bg-base-300"
                                onClick={() => getRequest("accepted", request._id)}

                            >Accept</button>
                            <button className="btn btn-error"
                                onClick={() => getRequest("rejected", request._id)}

                            >Decline</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );

}
export default Requests
