import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import CourseDetails from './CourseDetails';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddCourse = () => {
  const classes = useStyles();

  
  return (
    <Page className={classes.root} title="AddCourse">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8} md={6} xs={12}>
            <CourseDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AddCourse;
