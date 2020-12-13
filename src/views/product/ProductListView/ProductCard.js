import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import firebaseDb from '../../../firebase';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  TableBody
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();
  console.log(product);
  return (
    <TableBody>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {product.courseTitle}
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            {product.courseDescription}
          </Typography>
        </CardContent>
        <Box flexGrow={1} />
        <Divider />
        <Box p={2}>
          <Grid container justify="space-between" spacing={2}>
            <Grid className={classes.statsItem} item>
              <AccessTimeIcon className={classes.statsIcon} color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                {product.courseDuration ?? '1 month'}
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <AttachMoneyIcon className={classes.co} color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                {product.courseFee}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </TableBody>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
