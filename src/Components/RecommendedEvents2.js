import React, { useState, useEffect } from 'react'

import Activity from './Activity'
//import GetEvents from './GetRecEvents'

export default function RecommendedEvents({id,recommandations}) 
{
  return ( 
      <React.Fragment> 
      <div className='flex-1 grid grid-cols-4 grid-rows-4 px-2 py-2 gap-2'>
        {
          recommandations.map((event, key) =>
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

//: <header>You done goofed+</header>}