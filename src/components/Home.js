import React from 'react'
import {Cards , Charts , CountryPicker } from './index';
import {CovidProvider} from "./contextAPI/CovidContext"

const Home = () => {
    return (
        <div>
   <CovidProvider>
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
