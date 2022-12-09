import React, {useState, useEffect} from "react";

//This component creates a list of activities and displays them.
export default function Activitylist() {
    const [activities, setActivities] = useState([]);

    //This is the http request that fetches the activities to display.
    useEffect(() => {
        fetch('/getIncomingActivities' + new URLSearchParams("6", "Aalborg")).then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {setActivities([{id: 1, name: "Error"}]);})}, []);

  function deleteActivity(event, id){
    event.preventDefault();
    fetch('/RemoveActivity', {method: 'POST', body: id}).then(res => res.json())
    .then((result) => {alert("Success");},
    (error) => {alert("Failed to delete user " + id); setActivities([{id: 2, name: "ERROR ERROR"}])}
    );};
    //This is the HTML code that displays the list.
    return (
        <ul data-testid="list">
          {activities.map((data, index) => (
            <li key={index}> 
              <p>{data.name}</p>
              <button onClick={(event) => deleteActivity(event, data.id)}>Delete User</button>
            </li>
          ))}
        </ul>
      );
};
