import React from 'react';
import dayjs from 'dayjs';

export default function Day({day, rowIdx}) 
{
  function highlightCurrentDate()
  {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : ""
  }

  return (
    <div className='border border-gray-200 flex flex-col'>
      <header>
         {rowIdx === 0 && (
         <p className='text-sm mt-1 text-center'>
            {day.format('ddd').toUpperCase()}
         </p>
         )}
         <p className={`text-sm p-1 my-1 ${highlightCurrentDate()}`}>
            {day.format('DD')}
         </p>
      </header>
    </div>
  )
}
