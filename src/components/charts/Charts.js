import React, {useContext} from 'react';
import { Container } from "@material-ui/core";
import {CovidContext} from "../contextAPI/CovidContext";
import {Line} from "react-chartjs-2";


const Charts = ()=>{
    const covid = useContext(CovidContext);
    const {history} = covid;
    let allData = history.cases || history.country ? history : "Loading";
    let line;
    if(allData.country){
        const {timeline} = allData;
        const {cases,deaths,recovered} = timeline;
        const infectedCases = [];
        const deathCases = [];
        const recoveredCases = [];
        let dateData = [];
        for(let _case in cases){
            let obj = {_case: cases[_case]};
            infectedCases.push(obj);
        }
        for(let _death in deaths){
            let obj = {_death: deaths[_death]};
            deathCases.push(obj);
        }
        for(let _recover in recovered){
            let obj = {_recover: recovered[_recover]};
            recoveredCases.push(obj);
        }
       for(let _date in cases){
            let obj = {date: _date};
            dateData.push(obj);
        }
        
        line = (
            <Line
            data = {{
                labels : dateData.map(({date})=> date),
                datasets: [
                 {
                  data: infectedCases.map(({_case})=>_case),
                  label: "Infected",
                  borderColor :"#e31010",
                  fill: true   
                 },
               
                  {
                    data: recoveredCases.map(({_recover})=>_recover),
                    label: "Recovered",
                    borderColor :"#23b023",
                    fill: true   
                   },
                  
                   {
                    data: deathCases.map(({_death})=>_death),
                    label: "Deaths",
                    borderColor :"black",
                    fill: true   
                   }
                ]  
            }}
            
            />
        )
        
        
    }
    else{
        const {cases,deaths,recovered } = allData;
        const infectedCases = [];
        const deathCases = [];
        const recoveredCases = [];
        let dateData = [];
        for(let _case in cases){
            let obj = {_case: cases[_case]};
            infectedCases.push(obj);
        }
        for(let _death in deaths){
            let obj = {_death: deaths[_death]};
            deathCases.push(obj);
        }
        for(let _recover in recovered){
            let obj = {_recover: recovered[_recover]};
            recoveredCases.push(obj);
        }
        for(let _date in cases){
            let obj = {date: _date};
            dateData.push(obj);
        }
       
        line = (
            <Line
            data = {{
                labels : dateData.map(({date})=> date),
                datasets: [
                 {
                  data: infectedCases.map(({_case})=>_case),
                  label: "Infected",
                  borderColor :"#e31010",
                  fill: true   
                 },
                 {
                    data: recoveredCases.map(({_recover})=>_recover),
                    label: "Recovered",
                    borderColor :"#23b023",
                    fill: true   
                   },
                 {
                    data: deathCases.map(({_death})=>_death),
                    label: "Deaths",
                    borderColor :"black",
                    fill: true   
                   }
                
                 
                ]  
            }}
            
            />
        ) 



    }
    
    
    
    return(
    <Container>
        <div>
            {line}
        </div>
    </Container>
    )
}
export default Charts;