import React, {useState, useEffect} from "react";
import activity from "./Activity";

export default function Recommendedactivities({id}) {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('' + new URLSearchParams({id: id})).then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {setActivities([{id: 1, name: "Error"}]);})}, [id]);
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