import React, {useContext}  from "react";
    // styles
import styles from "./Cards.module.css";
    // Material Ui
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import HotelIcon from '@material-ui/icons/Hotel';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
    // CountUp Libtray
import CountUp from "react-countup";
    // Global Context
import {CovidContext} from "../contextAPI/CovidContext";
    // useStyleComponent
import {useStyles} from './useStyle';






const Cards = ()=>{
  const classes = useStyles();
    const covid = useContext(CovidContext)
    const {global} = covid
      // fetching this data from Global Data
    let covidData = global.cases ? global : {
      cases:0,todayCases:0,
      recovered:0, todayRecovered:0,
      active:0,critical:0,
      deaths:0,todayDeaths:0,
       updated:0
      }

      // Date
     let getDate = new Date(covidData.updated) ;
     let ymd = getDate.getFullYear()+'-'+(getDate.getMonth()+1)+'-'+getDate.getDate()
     let hms = getDate.getHours()+ ":" + getDate.getMinutes() + ":" + getDate.getSeconds();
     let LastUpdate = `${ymd} ${hms}`

    return(
      <div className={styles.container}>
     <Grid container spacing={0} justify="center">
       {/* infected */}
      <Card
        className={(classes.root, classes.infected)}
        variant="outlined"
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
          Total  Infected
          </Typography>
          <Typography variant={"h5"} component={"h2"}>
          <CountUp start = {0} end= {covidData.cases} 
          separator = ","
           duration ={1.7}/>          
           </Typography>
          <Typography>
            <b> Today Cases {" : "} </b>
            {
               <CountUp start = {0} end= {covidData.todayCases}
                separator = "," 
                duration ={1}/> 
            }
          </Typography>
            
          <Typography variant="body2" component={"div"}>
          Confirmed active cases of COVID-19
          <hr/>
            <Typography>
           Last Update : {LastUpdate}
            </Typography>
            <hr />
            <div>{<HotelIcon fontSize="large" />}</div>
          </Typography>
        </CardContent>
      </Card>
            {/* Recovered */}
      <Card
        className={(classes.root, classes.recovered)}
        variant="outlined"
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
          Total Recovered
          </Typography>
          <Typography variant={"h5"} component={"h2"}>
              <CountUp start = {0} end= {covidData.recovered} 
              separator = "," 
              duration ={1.7}/> 
          </Typography>
          <Typography>
            <b>Today Recovered {" : "}</b>
            {
                <CountUp start = {0} end= {covidData.todayRecovered}
                 separator = "," 
                 duration ={1}/> 
            }
          </Typography>
          <Typography variant="body2" component={"div"}>
          Confirmed Recoveries from COVID-19
          <hr/>
          <Typography>
           Last Update : {LastUpdate}
            </Typography>
            <hr />
            <DoneAllIcon fontSize={"large"} />
          </Typography>
        </CardContent>
      </Card>
          {/* Active Cases */}
          <Card
        className={(classes.root, classes.Active)}
        variant="outlined"
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Active Cases
          </Typography>
          <Typography variant={"h5"} component={"h2"}>
          <CountUp start = {0} end= {covidData.active}
           separator = "," 
           duration ={1.7}/> 
          </Typography>
          <Typography>
            <b>Critical Cases {" : "}</b>
            {
                <CountUp start = {0} end= {covidData.critical} 
                separator = ","
                 duration ={1}/> 
            }
          </Typography>
          <Typography variant="body2" component={"div"}>
          Confirmed Active from COVID-19
          <hr/>
          <Typography>
          Last Update : {LastUpdate}
            </Typography>
            <hr />
            <ReportProblemIcon fontSize={"large"} />
          </Typography>
        </CardContent>
      </Card>
              {/* Deaths */}
      <Card
        className={(classes.root, classes.deaths)}
        variant="outlined"
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
           Total Deaths
          </Typography>
          <Typography variant={"h5"} component={"h2"}>
          <CountUp start = {0} end= {covidData.deaths} 
          separator = ","
           duration ={1.7}/>       
               </Typography>
          <Typography>
            <b> Today Deaths {" : "} </b>
            {
              <CountUp start = {0} end= {covidData.todayDeaths}
               separator = ","
                duration ={1}/> 
            }
          </Typography>
          <Typography variant="body2" component={"div"}>
          Confirmed Deaths of COVID-19
          <hr/>
          <Typography>
          Last Update : {LastUpdate}
            </Typography>
            <hr />
            <CancelIcon fontSize={"large"} />
          </Typography>
        </CardContent>
      </Card>
      
      
    </Grid>
      </div>
    )
}
export default Cards;