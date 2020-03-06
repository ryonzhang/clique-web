import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SignatureCanvas from 'react-signature-canvas'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Please sign below:
      </Typography>
      <Paper>
      <SignatureCanvas penColor='blue'
                       canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
      </Paper>
    </React.Fragment>
  );
}
