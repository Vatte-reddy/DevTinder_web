const UserCard = ({ user }) => {
  if (!user) return null

  const { firstName, lastName, photoUrl, email, age, gender, about } = user

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
          <button className="btn btn-primary bg-base-200">Accept</button>
          <button className="btn btn-secondary">Not Interested</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard