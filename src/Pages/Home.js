import React, { useState } from 'react'
import Organizer from './Organizer';
import Student from './Student';

export default function Home()
{
    const [role, setRole] = useState('Student');
     

    return (
        <React.Fragment>
        {role == 'Student' ? <Student /> : <Organizer />}
        </React.Fragment>
    )
}
