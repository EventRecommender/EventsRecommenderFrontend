import React, { useState } from 'react'
import Activity from './Activity'
import CreateDummyEvents from './TestEvents'

let tempLink1 = "https://akkc.dk/media/7850/wallmans-2022-akkc-1920x1080.jpg?center=0.38317757009345793,0.5&mode=crop&width=425&height=324&rnd=132999232960000000"
let tempLink2 = "https://akkc.dk/media/7989/jul-i-gammelby-akkc-1920x1080.jpg?anchor=center&mode=crop&width=425&height=324&rnd=133082206630000000"

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
