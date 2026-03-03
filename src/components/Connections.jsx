import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { URL } from '../utilis/constants'
import { addConnections } from '../utilis/connectionSlice'

const Connections = () => {

    const connections = useSelector((store) => store.connection)
    const dispatch = useDispatch()



    const getConnections = async () => {

        try {
            const res = await axios.get(URL + '/user/connections', {
                withCredentials: true,
            })
            console.log(res?.data?.data)
            dispatch(addConnections(res?.data?.data))
        } catch (e) {
            console.error('Error fetching connections:', e)
        }
    }

    useEffect(() => {
        getConnections()
    }, [])



    if (!connections) return

    if (!connections.length) return <h1>No Connections</h1>;

    return (
        <div className="text-center my-10">
            <h1 className="text-2xl font-bold mb-6">Connections</h1>

            {connections.map((connection) => {
                if (!connection) return null;
                const { firstName, lastName, photoUrl, age, gender, about } = connection;

                return (
                    <div
                        key={connection._id || connection.id || Math.random().toString()}
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
                    </div>
                );
            })}
        </div>
    );

}

export default Connections