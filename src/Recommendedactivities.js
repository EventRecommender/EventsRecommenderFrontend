import React, {useState, useEffect} from "react";
import activity from "./Activity";

export default function Recommendedactivities({id}) {

    const activity = fetchActivities();
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('' + new URLSearchParams({id: id})).then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {alert("Error");})}, [id]);
    return (
        <ul>
          {activity.map((data) => (
            <li key={data.id}> 
              <p>{data.name}</p>
            </li>
          ))}
        </ul>
      );
};

function fetchActivities(){

    const eventlist = [];
    let i = 0;
    while(i < 2){
        eventlist.push(activity(i, "Dolmere"));
        i = i + 1;
    }

    return eventlist;
};