import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
  container: {
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '150px',
    margin: '5px'
  }
});

const User = props => {
  const { classes, user } = props;
  return (
    <div className={classes.container}>
      <Link to={`/user/${user.id}`}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant='h5' component='h3'>
            {user.name}
          </Typography>
        </Paper>
      </Link>
    </div>
  );
};

export default withStyles(styles)(User);
