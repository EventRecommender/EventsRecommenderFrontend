import React from 'react';
import dayjs, { Dayjs } from 'dayjs';

export default function GetEvents(id)
{
    //fetch event
    let url = new URL('/getRecommendations', window.location.origin),
        params = {userid:id}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then((response) =>{
        if (response.ok)
        {
            response.json().then((content) => {
                console.log(content);

                let result = []

                for (let act of content){
                    let event = {
                        key: act.id,
                        img: act.img,
                        title: act.title,
                        place: act.place,
                        host: act.host,
                        date: act.date,
                        type: act.type,
                        url: act.url,
                        description: act.description
                    }
                    result.push(event)
                }
                return result;
            })
        }
    }).catch((error) => {
        console.log(error);
        return []
    });
}
