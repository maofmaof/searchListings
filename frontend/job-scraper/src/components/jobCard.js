import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { deleteJobListingDB } from '../api';

function JobCard(props) {

  const classes = useStyles();

  function deleteJobListing() {

    deleteJobListingDB(props.id)
    const newList = props.jobs.filter((p) => p.id !== props.id);
    props.setJobs(newList)
    console.log(props.jobs)
  }

  return (
    <Card className={classes.root}>
      <a className={classes.linkTag} href={props.jobLink} >
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.jobTitle}
            </Typography>
            <Typography gutterBottom variant="h6" >
              {props.companyName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.bodyText}
            </Typography>
          </CardContent>

        </CardActionArea>
      </a>


      <CardActions>
        <Button onClick={deleteJobListing} size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Working progress
        </Button>
        <Typography gutterBottom variant="caption">
          Datum: {props.releaseDate}
        </Typography>
      </CardActions>

    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: "40%",
    marginTop: 20,

    margin: "Auto"
  },
  linkTag: {
    color: "black",
    textDecoration: "none"

  }
});
export default JobCard;