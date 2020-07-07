  import {useState,useEffect } from "react";
  import axios from "axios";

  export const FetchAPI = () => {
      const [url,setUrl] = useState('');
      const [globalData, setGlobalData] = useState({});
      useEffect(() => {
          if(url === '') {
              axios.get(`https://disease.sh/v2/all`)
              .then(response => response.data)
              .then(data => setGlobalData(data))
              .catch(err => console.log(err))
          }
          else {
              axios.get(`https://disease.sh/v2/all${url}`)
              .then(response => response.data)
              .then(data => setGlobalData(data))
              .catch(err => console.log(err))
          }
      
      }
      ,[url,setUrl]
      )


      

        return {setUrl,globalData}

  }


