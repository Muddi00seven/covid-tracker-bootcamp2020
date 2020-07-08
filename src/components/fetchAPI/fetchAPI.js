  import {useState,useEffect } from "react";
  import axios from "axios";


  export const FetchAPI = () =>{
    const [url,setUrl] = useState("");
    const [global,setGlobal] = useState({});
    const [history,setGlobalHistory] = useState({});
    const [country,setCountry] = useState({});
    // fetching data for global countries
    useEffect(()=>{
    if(url === ""){
      axios.get(`https://disease.sh/v2/all`)
      .then(response => response.data)
      .then(data => setGlobal(data) )
      .catch(err => console.log(err))
     }
    else{
    axios.get(`https://disease.sh/v2/countries/${url}`)
    .then(response => response.data)
    .then(data => setGlobal(data))
    .catch(err => console.log(err))
    
    } },[url,setUrl])

    // fetching data for global history of countries 
    useEffect(()=>{
      if(url === ""){
        axios.get(`https://disease.sh/v2/historical/all?lastdays=200`)
        .then(response => response.data)
        .then (data => setGlobalHistory(data) )
        .catch (err => console.log(err))
      }
      else{
      axios.get(`https://disease.sh/v2/historical/${url}?lastdays=200`)
      .then(response => response.data)
      .then(data => setGlobalHistory(data))
      .catch(err => console.log(err))
      
      } },[url,setUrl])
    
    // fetching data to manuplate the cards data when user select country from country picker
    useEffect(()=>{
      axios.get(`https://covid19.mathdro.id/api/countries`)
        .then(response => response.data)
        .then(data => setCountry(data))
        .catch(err => console.log(err))
       },[])
      // returning all state values
      return {setUrl,global,history,country}}
     