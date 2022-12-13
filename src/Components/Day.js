import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import GlobalContext from '../Context/GlobalContext';

export default function Day({ day, rowIdx, incommingActivities }) 
{
  const activities = incommingActivities.filter((activity) => dayjs(activity.date).format('DD/MM/YY') === day.format('DD/MM/YY'));

  function highlightCurrentDate()
  {
    return day.format('DD/MM/YY') === dayjs().format('DD/MM/YY') ? 'bg-blue-600 text-white rounded-full w-7 ' : ""
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
      <div className='flex-1 cursor pointer'>
      {
        activities.map((activity, idx) => 
        (
          <div className="p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate"> 
            {activity.title}
          </div>
        ))
      }
      </div>
    </div>
  )
}
