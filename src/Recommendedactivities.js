import React from "react";
import activity from "./Activity";

export default function Recommendedactivities() {

    const activities = fetchActivities();

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

function fetchActivities(){
    const eventlist = [];
    let i = 0;
    while(i < 2){
        eventlist.push(activity(i, "Dolmere"));
        i = i + 1;
    }

    return eventlist;
};