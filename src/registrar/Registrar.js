import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import {
  Formik,
} from 'formik';
import * as Yup from 'yup';

import music from '../assets/music.jpg';
import china from '../assets/china.jpg';
import drawing from '../assets/drawing.jpg';
import instruments from '../assets/instruments.png';
import speech from '../assets/speech.jpg';
import programming from '../assets/programming.jpg';
import Checkout from "../checkout/Checkout";
import FluidGallery from 'react-fluid-gallery'
import Gallery from "react-photo-gallery";



const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    //   width: 600,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: 100,
  },

  gridList: {
    width: 500,
    height: 600,
    paddingTop:30,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  text:{
    padding:50,
  },
  copyright:{
    paddingTop:50,
  },
    h1:{
        fontFamily:'Passion One,sans-serif',
        fontWeight:400,
        fontSize:'4.25rem',
        paddingTop:50,
        paddingLeft:60,
    },
    h2:{
        fontFamily:'Passion One,sans-serif',
        fontWeight:100,
        fontSize:'2.25rem',
        textAlign:'left',
        paddingLeft:60,
    },
    body1:{
        fontWeight:100,
        fontSize:'1.25rem',
        textAlign:'left',
        paddingLeft:60,
    }
}));

const photos = [
    {
        src: music,
        width: 5,
        height: 3
    },
    {
        src: china,
        width: 4,
        height: 3
    },
    {
        src: drawing,
        width: 4,
        height: 3
    },
    {
        src: programming,
        width: 4,
        height: 3
    },
    {
        src: instruments,
        width: 5,
        height: 3
    },
    {
        src: speech,
        width: 1,
        height: 1
    }
];


export default function Registrar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openCheckout, setOpenCheckout] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit= () => {
    setOpen(false);
  };

  const handleCheckoutClickOpen = () => {
    setOpenCheckout(true);
  };

  const handleCheckoutClose = () => {
    setOpenCheckout(false);
  };

  function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/" >
            Clique
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
  }

  return (
    <React.Fragment>


      <main className={classes.layout} >
        {/*<div className={classes.root}>*/}
          <Grid container spacing={3}>
            <Grid item xs={6}>

              <h1 className={classes.h1}>Why Clique?</h1>

                  <h2 className={classes.h2}>Increase your monthly revenue</h2>
                  <body1 className={classes.body1}>Maximize class spots and get paid for every reservation</body1>

                  <h2 className={classes.h2}>Optimize your business</h2>
                  <body1 className={classes.body1}>Access data and insights on reservations and user behavior</body1>
                      <h2 className={classes.h2}>Increase traffic and extend market presence</h2>
                  <body1 className={classes.body1}>Attract new customers seeking the best activities for their children</body1>


              <Button variant="outlined" size={'large'} className={classes.button} onClick={handleCheckoutClickOpen}>
                  <b>I'm in! Register me!</b>
              </Button>

            </Grid>
            <Grid item xs={6}>
                <Gallery photos={photos} />;
            </Grid>
          </Grid>
        {/*</div>*/}
        <Copyright />
        <Dialog open={openCheckout} onClose={handleCheckoutClose} aria-labelledby="form-dialog-title">
          <Checkout close={handleCheckoutClose}/>
        </Dialog>
      </main>
    </React.Fragment>
  );
}
