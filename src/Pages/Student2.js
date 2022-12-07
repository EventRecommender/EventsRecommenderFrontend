import React from 'react'
import Calendar from '../Components/Calendar'
import Topbar from '../Components/Topbar'
import ContextWrapper from '../Context/ContextWrapper'


export default function Student2() 
{
  return (
    <React.Fragment>
      <Topbar/>
      <ContextWrapper>
         <Calendar/>
      </ContextWrapper>
    </React.Fragment>
  )
}
