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
            </li>
          ))}
        </ul>
      );
};