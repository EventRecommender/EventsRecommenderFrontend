import React, { useState, useContext, useEffect } from 'react'

import CalendarHeader from './CalendarHeader';
import Sidebar from './Sidebar';
import Month from './Month';
import getMonth from './util';
import GlobalContext from '../Context/GlobalContext';
import ActivityModel from './ActivityModel';
import PageToggleBar from './PageToggleBar';

export default function Calendar() 
{
   const [currentMonth, setCurrentMonth] = useState(getMonth())
   const { monthIndex, showActivityModel } = useContext(GlobalContext)

   useEffect(() =>
   {
      setCurrentMonth(getMonth(monthIndex))
   }, [monthIndex]);

   return (
      <React.Fragment>
         {showActivityModel && <ActivityModel />}
         <div className='h-screen flex flex-col'>
            <PageToggleBar/>
            <CalendarHeader />
            <div className='flex flex-1'>
               <Month month={currentMonth} />
            </div>
         </div>
      </React.Fragment>
   )
}
