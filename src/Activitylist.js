import React, {useState, useEffect} from "react";

export default function Activitylist() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('').then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {alert("Error");})}, []);
    return (
        <ul>
          {activities.map((data) => (
            <li key={data.id}> 
              <p>{data.name}</p>
            </li>
          ))}
        </ul>
      );
};