import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
  page: {
    marginTop: theme.spacing(2),
    maxWidth: "20%",
  
   
    margin: "Auto"
  },
}));

 function PageStepper() {
   const classes = useStyles();
  
    return (
      <div className={classes.page} >
        <Pagination count={10} shape="rounded" />
      
      </div>
    );
  }

  export default PageStepper;

