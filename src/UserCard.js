const UserCard = (props) =>{
    const users = props.users
    return(
        <div className="userCard">
            {users.map(user => (
                <p>{user.name +" (" +user.age + " years old)"}</p>
            ))}
        </div>
    )
}



export default UserCard