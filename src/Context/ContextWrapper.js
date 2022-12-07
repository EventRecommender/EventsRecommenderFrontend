import React, { useState } from 'react';
import dayjs from 'dayjs';
import GlobalContext from './GlobalContext';

export default function ContextWrapper(props)
{
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [showActivityModel, setShowActivityModel] = useState(null);
    
    return (
        <GlobalContext.Provider 
        value=
        {{
         monthIndex, 
         setMonthIndex,
         showActivityModel,
         setShowActivityModel
         }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
