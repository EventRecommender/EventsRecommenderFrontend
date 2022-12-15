import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Loginpage from '../Pages/Loginpage2';
import CreateUser from '../Pages/CreateUser2';
import Student2 from '../Pages/Student2';

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
