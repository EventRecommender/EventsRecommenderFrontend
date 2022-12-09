import React, {useState, useEffect} from "react";
//The recommendedactivities component.
export default function Recommendedactivities({id}) {

    const [activities, setActivities] = useState([]);
    //Effect hook which fetches the recommended activities
    useEffect(() => {
        fetch('/getRecommendations' + new URLSearchParams({id: id})).then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {setActivities([{id: 1, name: "Error"}]);})}, [id]);

    //Renders the activity list
    return (
        <ul data-testid="list">
          {activities.map((data) => (
            <li key={data.id}> 
              <p>{data.name}</p>
            </li>
          ))}
        </ul>
      );
};