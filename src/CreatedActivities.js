import React, { useEffect, useState } from "react";


export default function CreatedActivities({id}) {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('' + new URLSearchParams({id: id})).then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {setActivities([{id: 1, name: "Error"}]);})}, [activities, id]);

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