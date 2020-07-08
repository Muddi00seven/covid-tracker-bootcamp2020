import React from 'react'
// import Typical from 'react-typical';
import styles from './Contact.module.css'
import TextLoop from "react-text-loop";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
const Contact = () => {
   
    return (
        <div>
            <br/>
            <hr/>
              <h1 className={styles.heading}>  VISIT ON 
     <TextLoop
        className={styles.heading}
        springConfig={{ stiffness: 120, damping: 101 }}
        adjustingSpeed={1000}
      >
        <a href="https://github.com/Muddi00seven" target='_blank' className={styles.link} rel="noopener noreferrer" ><span> <GitHubIcon fontSize={"large"} className={styles.icon1}/> </span></a>
        <a href="https://www.linkedin.com/in/mudassir-khan-84a91415b"  className={styles.link} target='_blank' rel="noopener noreferrer"><span> <LinkedInIcon fontSize={"large"} className={styles.icon2}/> </span></a>
        <a href="https://www.facebook.com/profile.php?id=100005873677424" className={styles.link}  target='_blank' rel="noopener noreferrer"><span>  <FacebookIcon fontSize={"large"} className={styles.icon3}/> </span></a>
        <a href="https://cubeacloud.com" target='_blank' className={styles.link} rel="noopener noreferrer">'<span> Cube A Cloud </span>'</a>

      </TextLoop>
      </h1>
        </div>
    )
}

export default Contact;
