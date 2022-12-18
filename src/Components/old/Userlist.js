import React,{useState, useEffect} from "react";

export default function Userlist({token}) {
    const [users, setUsers] = useState([]);
    
    function deleteUser(event, id){
      event.preventDefault();

      let url = new URL('/removeUser', window.location.origin),
      params = {token: token, userid: id}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

      fetch(url, {method: 'DELETE'}).then(res => res.json())
      .then((result) => {alert("user deleted");},
      (error) => {alert("Failed to delete user " + id); setUsers([{id: 2, name: "ERROR"}])}
      );};

    useEffect(() => {
        let url = new URL('/getUsers', window.location.origin),
        params = {token: token}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        fetch(url).then(res => res.json())
            .then((result) => {
              setUsers(result);
            }, 
            (error) => {setUsers([{id: 1, name: "Error"}]);})}, []);
    return (<>
        <ul data-testid="list" >
          {users.map((data, index) => (
            <li key={index}> 
              <p>{data.username}</p>
              <button onClick={(event) => deleteUser(event, data.id)}>Delete User</button>
            </li>
          ))}         
        </ul>       
        </>
      );
};