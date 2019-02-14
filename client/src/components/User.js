import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const User = props => {
  const { classes, user } = props;
  return (
    <>
      <Paper className={classes.root} elevation={1}>
        <Typography variant='h5' component='h3'>
          {user.name}
        </Typography>
        <Typography component='p'>
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
    </>
  );
};

export default withStyles(styles)(User);
