import React, { useState, useContext } from 'react';

import AuthContext from './Context/AuthProvider';
import Topbar from './Components/Topbar';
import Main from './Components/Main';

export default function App()
{
   const { auth, user, isLoggedIn, role } = useContext(AuthContext);

   const [username, setUsername] = useState(user.username);

   return (
      <React.Fragment>
         <Topbar name={user.username} />
         <Main />
         {/* <div>
               {
                  isLoggedIn ? <Main /> : <Login />
               }
            </div> */}
      </React.Fragment>
   )
}