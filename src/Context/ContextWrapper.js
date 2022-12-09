import React, { useState, useReducer, useEffect } from 'react';
import dayjs from 'dayjs';
import GlobalContext from './GlobalContext';

function savedActivitiesReducer(state, { type, payload })
{
    switch (type)
    {
        case 'push':
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
    const storedActivities = localStorage.getItem('savedActivities');
    //const parsedActivities = storedActivities ? JSON.parse(storedActivities) : [] 
}

export default function ContextWrapper(props)
{
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [showActivityModel, setShowActivityModel] = useState(null);
    const [isCalendar, setIsCalendar] = useState("true");
    const [savedActivities, dispatchCalActivity] = useReducer(savedActivitiesReducer, [], initActivities);

    useEffect(() =>
    {
        localStorage.setItem('savedActivities', JSON.stringify(savedActivities))
    }, [savedActivities])

    return (
        <GlobalContext.Provider value=
            {{
                monthIndex,
                setMonthIndex,
                showActivityModel,
                setShowActivityModel,
                isCalendar,
                setIsCalendar,
                dispatchCalActivity
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
