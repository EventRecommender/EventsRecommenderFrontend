import React, { useState, useContext, useEffect } from 'react'

import CalendarHeader from './CalendarHeader';
import Month from './Month';
import getMonth from './util';
import GlobalContext from '../Context/GlobalContext';

export default function Calendar({incommingActivities}){

   const [currentMonth, setCurrentMonth] = useState(getMonth())
   const { monthIndex, showActivityModel } = useContext(GlobalContext)
   
   useEffect(() =>
   {
      setCurrentMonth(getMonth(monthIndex))
   }, [monthIndex]);

   return (
      <React.Fragment>
         <div className='h-screen flex flex-col'>
            <CalendarHeader />
            <div className='flex flex-1'>
               <Month month={currentMonth} incommingActivities = {incommingActivities} />
            </div>
         </div>
      </React.Fragment>
   )
}
