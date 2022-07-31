import React, { useState } from 'react';
import NewUserForm from './NewUserForm';
import UserCard from './UserCard';




function App() {

  const [users, setUsers] = useState([])

      const addNewUser = (user)=> {
        console.log(user);  
        setUsers((prevUsers)=>{
          return [...prevUsers,
                  user]

        })    }

  return (
    <div>
      <NewUserForm onAdd={addNewUser}/>    
      <UserCard users={users}/>
    </div>
  );
}

export default App;
