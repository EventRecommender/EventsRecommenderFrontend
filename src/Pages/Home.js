import React, { useState } from 'react'
import UserService from '../Services/UserService';
import Organizer from './Organizer';
import Student from './Student';

export default function Home()
{

    return (
        <React.Fragment>
            {UserService.getRole() == 'Student' ? <Student /> : <Organizer />}
        </React.Fragment>
    )
}