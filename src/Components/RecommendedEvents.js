import React, { useState } from 'react'

import Activity from './Activity'
import CreateDummyEvents from './TestEvents'

export default function RecommendedEvents({ }) 
{
  const [recommendedEvents, setRecommendedEvents] = useState(CreateDummyEvents(20)) // Events retrieved from service
  
  return (
    <React.Fragment>
      <div className='flex-1 grid grid-cols-4 grid-rows-4 px-2 py-2 gap-2'>
      {
        recommendedEvents.map((event, key) => 
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
