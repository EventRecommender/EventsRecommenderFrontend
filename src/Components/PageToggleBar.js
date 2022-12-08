import React, { useState, useContext, useEffect } from 'react'
import GlobalContext from '../Context/GlobalContext'

export default function PageToggleBar() 
{
   const { isCalendar, setIsCalendar } = useContext(GlobalContext)

   // Debugging
   useEffect(() =>
    {
      console.log(isCalendar)
    }, [isCalendar])

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
