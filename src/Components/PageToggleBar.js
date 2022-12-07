import React, { useState } from 'react'

export default function PageToggleBar() 
{
   const [selected, setSelected] = useState('calendar')

  return (
    <div className='flex items-center'>
      <button onClick={() => setSelected("recommended events")} className='border flex-1 hover:bg-gray-200 focus:outline-none'>
         <header>
            Recommended Events
         </header>
      </button>
      <button onClick={() => setSelected("calendar")} className='border flex-1 hover:bg-gray-200 focus:outline-none'>
         <header>
            Calendar
         </header>
      </button>
   </div>
  )
}
