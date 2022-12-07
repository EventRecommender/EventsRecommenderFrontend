import React from 'react';

const StudentContext = React.createContext({
    currentSetting: "1",
    setCurrentSetting: () => {}
});

export default StudentContext;