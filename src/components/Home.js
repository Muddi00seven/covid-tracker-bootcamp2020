import React from 'react'
import {Cards , Charts , CountryPicker , Header } from './index';
import {CovidProvider} from "./contextAPI/CovidContext"

const Home = () => {
    return (
        <div>
   <CovidProvider>
                <Header/>
       {/* cards */}
                <Cards/>
        {/* CountryPicker */}
                <CountryPicker/>
        {/* Charts */}
                <Charts/>
    </CovidProvider>

        </div>
    )
}

export default Home
