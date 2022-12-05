import React, { useEffect, useState } from "react";
import activity from "./Activity";

export default function CreatedActivities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch("").then(res => res.json())
            .then((result) => {setActivities(result);}, 
            (error) => {alert("Error");})}, [])
};