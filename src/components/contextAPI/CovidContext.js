import React, { createContext}  from 'react';
import {FetchAPI  } from '../fetchAPI/fetchAPI';

export const CovidContext = createContext();
export const CovidProvider = ({children}) => {
    const {setUrl, globalData } = FetchAPI();


    return(
        <CovidContext.Provider value = {{setUrl, globalData }}>
            {children}
        </CovidContext.Provider>
    )
}