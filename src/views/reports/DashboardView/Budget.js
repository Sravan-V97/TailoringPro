import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import firebaseDb from '../../../firebase';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import './cards.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Budget = ({ className, ...rest }) => {
  const classes = useStyles();

  var [courseObjects,setCourseObjects] = useState({})

  useEffect(()=>{
    firebaseDb.child('coursedetails').on('value',snapshot=>{
      if(snapshot.val()!=null)
      setCourseObjects({
        ...snapshot.val()
      })
    }) 
  },[])

  return (
    <Card id="cardDesign"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h5"
            >
              TOTAL COURSES
            </Typography>
            <Typography
              color="textPrimary"
              variant="h1"
            >
             {Object.keys(courseObjects).length}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
