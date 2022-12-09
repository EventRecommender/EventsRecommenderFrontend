import React, { useState, useReducer, useEffect } from 'react';
import dayjs from 'dayjs';
import GlobalContext from './GlobalContext';
import createDummyEvents from '../Components/TestEvents';

function storedActivitiesReducer(state, { type, payload })
{
    switch (type)
    {
        case 'add':
            return [...state, payload];
        case 'update':
            return state.map(activity => activity.id === payload.id ? payload : activity)
        case 'delete':
            return state.filter(activity => activity.id !== payload.id)
        default:
            throw new Error();
    }
}

function initActivities()
{
    const storedActivities = localStorage.setItem('activities', createDummyEvents());
    //const parsedActivities = storedActivities ? JSON.parse(storedActivities) : [] 
    //return parsedActivities;
    return storedActivities;
}

export default function ContextWrapper(props)
{
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [showActivityModel, setShowActivityModel] = useState(null);
    const [storedActivities, dispatchCalActivity] = useReducer(storedActivitiesReducer, [], createDummyEvents);

    useEffect(() =>
    {
        localStorage.setItem('storedActivities', JSON.stringify(storedActivities));
        console.log(createDummyEvents())
    }, [storedActivities]);

    return (
        <GlobalContext.Provider value=
            {{
                monthIndex,
                setMonthIndex,
                showActivityModel,
                setShowActivityModel,
                dispatchCalActivity,
                storedActivities,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
