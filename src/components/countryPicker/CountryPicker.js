import React, {useContext} from 'react';
import styles from './CountryPicker.module.css'
import {CovidContext} from "../contextAPI/CovidContext"
import NativeSelect from '@material-ui/core/NativeSelect';

const CountryPicker = () => {
    const covid = useContext(CovidContext);
    const {setUrl,country} = covid;
     const allCountries = country.countries ? country.countries : [];
    return(
        <div className={styles.countryPicker}>
            <NativeSelect onChange = {(e)=> setUrl(e.target.value)} className={styles.nativeSelect}>
                <option value="">Select Country</option>
                {allCountries.map((country)=> <option key={country.name}
                value={country.name}>
                {country.name} </option>)}
            </NativeSelect>
        </div>
    )
}

export default CountryPicker
