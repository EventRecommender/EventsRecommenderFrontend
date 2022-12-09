import React from 'react';

import Topbar from './Components/Topbar';
import Calendar from './Components/Calendar';
import ContextWrapper from './Context/ContextWrapper';

export default function App()
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