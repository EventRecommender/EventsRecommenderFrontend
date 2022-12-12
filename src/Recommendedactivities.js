import React, {useState, useEffect} from "react";
//The recommendedactivities component.
export default function Recommendedactivities({id}) {

    const [activities, setActivities] = useState([]);
    //Effect hook which fetches the recommended activities
    useEffect(() => {
        fetch('/getRecommendations' + new URLSearchParams({id: id})).then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {setActivities([{id: 1, name: "Error"}]);})}, [id]);

    function likeActivity(event, id){
      event.preventDefault();
      fetch('/Like', {method: 'POST', body: id}).then(res => res.json())
        .then((result) => {alert("Success");},
        (error) => {alert("Failed to delete user " + id); setActivities([{id: 2, name: "ERROR ERROR"}])}
      );};
    //Renders the activity list
    return (
        <ul data-testid="list">
          {activities.map((data) => (
            <li key={data.id}> 
              <p>{data.name}</p>
              <button onClick={(event) => likeActivity(event, data.id)}>Delete User</button>
            </li>
          ))}
        </ul>
      );
};