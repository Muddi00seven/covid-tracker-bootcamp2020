import React from 'react'
import {Cards , Charts , CountryPicker , Header ,Contact} from './index';
import {CovidProvider} from "./contextAPI/CovidContext"

const Home = () => {
    return (
        <div>
   <CovidProvider>
                <Header/>
      {/* CountryPicker */}
                <CountryPicker/>
       {/* cards */}
                <Cards/>
   
        {/* Charts */}
                <Charts/>
        {/* Contact */}
                <Contact/>
    </CovidProvider>

        </div>
    )
}

export default Home
