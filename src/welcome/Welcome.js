import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";

import music from '../assets/music.jpg';
import china from '../assets/china.jpg';
import drawing from '../assets/drawing.jpg';
import instruments from '../assets/instruments.png';
import speech from '../assets/speech.jpg';
import programming from '../assets/programming.jpg';
import {Checkbox} from "@material-ui/core";
import Checkout from "../checkout/Checkout";




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
    marginLeft: theme.spacing(1),
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
  }
}));



const tileData = [
    {
      img: music,
      title: 'Music',
      author: 'music',
    },
  {
    img: china,
    title: 'china',
    author: 'china',
  },
  {
    img: drawing,
    title: 'drawing',
    author: 'drawing',
  },
  {
    img: programming,
    title: 'programming',
    author: 'programming',
  },
  {
    img: instruments,
    title: 'instruments',
    author: 'instruments',
  },
  {
    img: speech,
    title: 'speech',
    author: 'speech',
  },
];


export default function Welcome() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openCheckout, setOpenCheckout] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Clique
          </Typography>
        </Toolbar>
      </AppBar>


      <main className={classes.layout} >
        {/*<div className={classes.root}>*/}
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className={classes.text}>
              <h1>Clique Title</h1>
              <h3>This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.

                If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.

              </h3>
              <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
                Interested? Let us contact you!
              </Button>
              <Button variant="contained"  className={classes.button} onClick={handleCheckoutClickOpen}>
                I'm in! Register me!
              </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <GridList cellHeight={180} className={classes.gridList}>
                {/*<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>*/}
                {/*  <ListSubheader component="div">December</ListSubheader>*/}
                {/*</GridListTile>*/}
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                      <img src={tile.img} alt={tile.title} />
                      {/*<GridListTileBar*/}
                      {/*    title={tile.title}*/}
                      {/*    subtitle={<span>by: {tile.author}</span>}*/}
                      {/*/>*/}
                    </GridListTile>
                ))}
              </GridList>
            </Grid>
          </Grid>
        {/*</div>*/}
        <Copyright />
        <Dialog open={openCheckout} onClose={handleCheckoutClose} aria-labelledby="form-dialog-title">
          <Checkout/>
        </Dialog>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">We will contact you!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              We will get in touch with you as soon as possible, please leave your contacts below, as simple as that! Or if you are eager to get it done right now, you can contact us at <b>+65 97361988</b> or add Whatsapp at this number.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Phone Number"
                type="number"
                fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </React.Fragment>
  );
}
