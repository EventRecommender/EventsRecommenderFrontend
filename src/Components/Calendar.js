import React, { useState } from 'react'

import CalendarHeader from './CalendarHeader';
import Sidebar from './Sidebar';
import Month from './Month';
import getMonth from './util';

export default function Calendar() 
{
   const [currentMonth, setCurrentMonth] = useState(getMonth())
   
   return (
   <React.Fragment>
      <div className='h-screen flex flex-columns'>
         <CalendarHeader />
         <div className='flex flex-1'>
            <Sidebar />
            <Month month={currentMonth} />
         </div>
      </div>
   </React.Fragment>
  )
}
