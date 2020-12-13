import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import firebaseDb from '../../../firebase';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  var [studentObjects,setStudentObjects] = useState({})

  useEffect(()=>{
    firebaseDb.child('studentdetails').on('value',snapshot=>{
      if(snapshot.val()!=null)
      setStudentObjects({
        ...snapshot.val()
      })
    }) 
  },[])

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Student Name
                </TableCell>
                <TableCell>
                  Courses
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {Object.keys(studentObjects).map(id => 
                <TableRow
                  hover
                  key={studentObjects.id}
                >
                  <TableCell>
                  {`${studentObjects[id].firstName}.${studentObjects[id].lastName}`}
                  </TableCell>
                  <TableCell>
                  {studentObjects[id].course.join(',')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="primary"
                      label="Active"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <RouterLink to="/app/students">
          <Button
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text"
          >
            View all
          </Button>
        </RouterLink>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
