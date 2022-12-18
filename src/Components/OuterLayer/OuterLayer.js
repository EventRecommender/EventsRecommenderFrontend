import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar'

export default function OuterLayer()
{
    return (
        <React.Fragment>
            <Topbar />
            <Outlet />
        </React.Fragment>
    )
}
