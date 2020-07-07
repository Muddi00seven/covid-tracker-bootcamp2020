import { makeStyles } from "@material-ui/core/styles";

  export const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: 50,
      padding: 30,
    },
    infected: {
      marginTop: 50,
      marginRight: 20,
      marginBottom: 30,
      color: "#e31010",
      borderRadius : 25,
      borderWidth: 2,
      borderColor: "#e31010",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(227, 16, 16,0.3)",
      },
    },
    recovered: {
      marginTop: 50,
      marginRight: 20,  
      marginBottom: 30,
      borderWidth: 2,
      color: "#23b023",
      borderRadius : 25,
      borderColor: "#23b023",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(35, 176, 35,0.4)",
      },
    },
    deaths: {
      marginTop: 50,
      marginBottom: 30,
      marginRight: 20,  
      borderWidth: 2,
      color: "#382121",
      borderColor: "#382121",
      borderRadius : 25,
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(56, 33, 33 ,0.6)",
      },
    },



    Active: {
        marginTop: 50,
        marginBottom: 30,
        marginRight: 20,  
        borderWidth: 2,
        color: "#315fd4",
        borderColor: "#315fd4",
        borderRadius : 25,
        boxShadow: "0 8px 40px -12px rgba(171, 183, 201)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(49, 95, 212 , 0.4)",
        },
      },
  });