import React, { useState, useEffect } from 'react'
import APIService from '../../Services/APIService'
import StorageService from '../../Services/StorageService';
import UserService from '../../Services/UserService'

import Activity from './Activity'
//import GetEvents from './GetRecEvents'

export default function RecommendedEvents() 
{
  const [recommendations, setRecommendations] = useState(StorageService.getRecommendedActivities());

  return ( 
      <React.Fragment> 
      <div className='flex-1 grid grid-cols-4 grid-rows-4 px-2 py-2 gap-2'>
        {
          recommendations.map((event, key) =>
            <Activity
              key={event.key}
              date={event.date}
              host={event.host}
              img={event.img}
              place={event.place}
              title={event.title}
              type={event.type}
              url={event.url}
            />)
        }
      </div>
    </React.Fragment> 
  )
}