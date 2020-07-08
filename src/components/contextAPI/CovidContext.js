import React, {createContext}  from 'react';
import {FetchAPI  } from '../fetchAPI/fetchAPI';

export const CovidContext = createContext();
export const CovidProvider = ({children}) => {
    const {setUrl,global,history,country} = FetchAPI();


    return(
        <CovidContext.Provider value = {{setUrl,global,history,country }}>
            {children}
        </CovidContext.Provider>
    )
}