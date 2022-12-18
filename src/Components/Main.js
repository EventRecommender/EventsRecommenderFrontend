import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Loginpage from '../Pages/Login';
import CreateUser from '../Pages/CreateUser';
import Student2 from '../Pages/Student';

export default function Main({type})
{
    const [userType, setUserType] = useState(type)

    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Loginpage/>}/>
                <Route path='create-user' element={<CreateUser/>}/>
                <Route path='home' element={<Student2/>}/>                
            </Routes>
        </React.Fragment>
    )
}
