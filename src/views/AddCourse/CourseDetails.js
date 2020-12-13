import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import firebaseDb from '../../firebase';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  TextareaAutosize
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { useTheme } from '@material-ui/core/styles';
import './course.css';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
const CourseDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [values, setValues] = useState({
    courseTitle: '',
    courseDescription: '',
    courseDuration: '',
    courseFee:''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = () => {
    
    let data = {
      id: uuid(),
        courseTitle: values.courseTitle,
        courseDescription: values.courseDescription,
        courseDuration: values.courseDuration,
        courseFee: values.courseFee

    };
    addEdit();
    console.log(data);
  };

  const addEdit = () => {
    firebaseDb.child('coursedetails').push(values);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Add Course"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Course Title"
                name="courseTitle"
                onChange={handleChange}
                required
                value={values.courseTitle}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextareaAutosize
                id="textarea"
                fullWidth
                label="Course Description"
                name="courseDescription"
                placeholder="Course Description"
                onChange={handleChange}
                required
                value={values.courseDescription}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Course Duration"
                name="courseDuration"
                onChange={handleChange}
                required
                value={values.courseDuration}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Course Fee"
                name="courseFee"
                onChange={handleChange}
                required
                value={values.courseFee}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              handleSubmit();
            }}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

CourseDetails.propTypes = {
  className: PropTypes.string
};

export default CourseDetails;
