import React, { useEffect, useState } from "react";


export default function CreatedActivities({username}) {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
      let url = new URL('/getUserActivties', window.location.origin),
        params = {username: username};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        fetch(url).then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {setActivities([{id: 1, title: "Error"}]);})}, []) ;

            return (
                <ul data-testid="list">
            {activities.map((data) => (
              <li key={data.id}> 
                <p>{data.title}</p>
              </li>
            ))}
          </ul>
        );
};