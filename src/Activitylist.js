import React, {useState, useEffect} from "react";

//This component creates a list of activities and displays them.
export default function Activitylist({area}) {
    const [activities, setActivities] = useState([]);

    //This is the http request that fetches the activities to display.
    useEffect(() => {
        let url = new URL('/getIncommingActivities', window.location.origin),
        params = {monthsForward: 6, area: area }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        fetch(url).then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {setActivities([{id: 1, title: "Error"}]);})}, []);

    function deleteActivity(event, id){
    event.preventDefault();

    let url = new URL('/RemoveActivity', window.location.origin),
    params = {activityList: [id] }

    fetch(url, {method: 'DELETE'}).then(res => res.json())
    .then((result) => {alert("activity deleted");},
    (error) => {alert("Failed to delete user " + id); setActivities([{id: 2, title: "ERROR"}])}
    );};
    //This is the HTML code that displays the list.
    return (
        <ul data-testid="list">
          {activities.map((data, index) => (
            <li key={index}> 
              <p>{data.title}</p>
              <button onClick={(event) => deleteActivity(event, data.id)}>Delete User</button>
            </li>
          ))}
        </ul>
      );
};
