import React, { useState, useContext } from 'react';

import AuthContext from './Context/AuthProvider';
import Topbar from './Components/OuterLayer/Topbar';
import Main from './Components/Main';

export default function App()
{
   const { auth, user, isLoggedIn, role } = useContext(AuthContext);

   const [username, setUsername] = useState('Not logged in');

   return (
      <React.Fragment>
         <Topbar name={username} />
         <Main />
         {/* <div>
               {
                  isLoggedIn ? <Main /> : <Login />
               }
            </div> */}
      </React.Fragment>
   )
}