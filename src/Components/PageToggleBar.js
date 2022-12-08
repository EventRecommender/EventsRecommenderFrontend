import React, { useState, useContext } from 'react'
import GlobalContext from '../Context/GlobalContext'

export default function PageToggleBar() 
{
   const { setIsCalendar } = useContext(GlobalContext)

   return (
    <div className='flex items-center'>
      <button onClick={() => setIsCalendar(false)} className='border flex-1 hover:bg-gray-200 focus:outline-none'>
         <header>
            Recommended Events
         </header>
      </button>
      <button onClick={() => setIsCalendar(true)} className='border flex-1 hover:bg-gray-200 focus:outline-none'>
         <header>
            Calendar
         </header>
      </button>
   </div>
  )
}
