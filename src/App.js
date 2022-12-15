import React, { useState } from 'react';

import Topbar from './Components/Topbar';
import UserContext from './Context/UserContext';
import Main from './Components/Main';
import Login from './Pages/Loginpage2';

export default function App()
{
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [username, setUsername] = useState("Not logged in");


   return (
      <React.Fragment>
         <Topbar name={username} />
         <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            <Main />
            {/* <div>
               {
                  isLoggedIn ? <Main /> : <Login />
               }
            </div> */}
         </UserContext.Provider>
      </React.Fragment>
   )
}