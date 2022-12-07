import React,{useState, useEffect} from "react";

export default function Userlist() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('').then(res => res.json())
            .then((result) => {setUsers(result);}, 
            (error) => {alert("Error");})}, []);
    return (
        <ul>
          {users.map((data) => (
            <li key={data.id}> 
              <p>{data.name}</p>
              <button onClick={deleteUser(data.id)}>Delete User</button>
            </li>
          ))}
        </ul>
      );
};

function deleteUser(id){
  fetch('', {method: 'POST', body: id}).then(res => res.json())
  .then((result) => {alert("Success");},
  (error) => {alert("Failed to delete user");}
  );
};