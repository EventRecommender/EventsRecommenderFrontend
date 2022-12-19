import React, { useState, useContext, useEffect } from 'react'

import CalendarHeader from './CalendarHeader';
import Month from './Month';
import getMonth from './util';
import GlobalContext from '../../Context/GlobalContext';
import StorageService from '../../Services/StorageService';

export default function Calendar()
{
   const [currentMonth, setCurrentMonth] = useState(getMonth())
   const { monthIndex, showActivityModel } = useContext(GlobalContext)
   const [incomingActivities, setIncomingActivities] = useState(StorageService.getIncomingActivities())

   useEffect(() =>
   {
      setCurrentMonth(getMonth(monthIndex))
   }, [monthIndex]);

   return (
      <React.Fragment>
         <div className='h-screen flex flex-col'>
            <CalendarHeader />
            <div className='flex flex-1'>
               <Month month={currentMonth} incommingActivities = {incomingActivities} />
            </div>
         </div>
      </React.Fragment>
   )
}
