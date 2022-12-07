import React from 'react'

export default function PageToggleBar() 
{
  return (
    <div className='py-4 flex items-center'>
      <button className='border flex-1'>
         <header>
            Recommended Events
         </header>
      </button>
      <button className='border flex-1'>
         <header>
            Calendar
         </header>
      </button>
   </div>
  )
}
