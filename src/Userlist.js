import React,{useState, useEffect} from "react";

export default function Userlist() {
    const [users, setUsers] = useState([]);
    
    function deleteUser(event, id){
      event.preventDefault();
      fetch('', {method: 'POST', body: id}).then(res => res.json())
      .then((result) => {alert("Success");},
      (error) => {alert("Failed to delete user " + id); setUsers([{id: 2, name: "ERROR ERROR"}])}
      );};

    useEffect(() => {
        fetch('').then(res => res.json())
            .then((result) => {setUsers(result);}, 
            (error) => {setUsers([{id: 1, name: "Error"}]);})}, []);
    return (<>
        <ul>
          {users.map((data, index) => (
            <li data-testid="list" key={index}> 
              <p>{data.name}</p>
              <button onClick={(event) => deleteUser(event, data.id)}>Delete User</button>
            </li>
          ))}         
        </ul>       
        </>
      );
};