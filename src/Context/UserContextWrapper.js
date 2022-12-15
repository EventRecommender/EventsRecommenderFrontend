import React from 'react';

export default function UserContextWrapper(props)
{

    return (
        <UserContext.Provider value=
            {{
                
            }}>
            {props.children}
        </UserContext.Provider>
    )
}
