import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { },
    showActivityModel: false,
    setShowActivityModel: () => { },
    displayCalendar: true,
    setDisplayCalendar: () => { },
    dispatchCalActivity: ({ type, payload }) => { },
    storedActivities: []
});

export default GlobalContext;