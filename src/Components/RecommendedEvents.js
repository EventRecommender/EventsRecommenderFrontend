import React from 'react'
import Activity from './Activity'

let tempLink1 = "https://akkc.dk/media/7850/wallmans-2022-akkc-1920x1080.jpg?center=0.38317757009345793,0.5&mode=crop&width=425&height=324&rnd=132999232960000000"
let tempLink2 = "https://akkc.dk/media/7989/jul-i-gammelby-akkc-1920x1080.jpg?anchor=center&mode=crop&width=425&height=324&rnd=133082206630000000"

export default function RecommendedEvents({ }) 
{
  const recommendedEvents = [] // Events retrieved from service

  return (
    <React.Fragment>
      <div className='flex-1 grid grid-cols-4 grid-rows-4 px-2 py-2 gap-2'>
        <Activity 
        img={tempLink1} 
        title='Roskilde Festival 2023' />
        <Activity 
        img={tempLink2}
        />

      </div>
    </React.Fragment>
  )
}
