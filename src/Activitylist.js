import React, {useState, useEffect} from "react";

//This component creates a list of activities and displays them.
export default function Activitylist() {
    const [activities, setActivities] = useState([]);

    //This is the http request that fetches the activities to display.
    useEffect(() => {
        fetch('').then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {setActivities([{id: 1, name: "Error"}]);})}, []);

    //This is the HTML code that displays the list.
    return (
        <ul>
          {activities.map((data) => (
            <li data-testid="list" key={data.id}> 
              <p>{data.name}</p>
            </li>
          ))}
        </ul>
      );
};