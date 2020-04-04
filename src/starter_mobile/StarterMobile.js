import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import axiosService from "../clients/api";
import {STATUS} from "../constants";
import {
    Formik,
} from 'formik';
import * as Yup from 'yup';

import music from '../assets/music.jpg';
import china from '../assets/china.jpg';
import drawing from '../assets/drawing.jpg';
import instruments from '../assets/instruments.png';
import speech from '../assets/speech.jpg';
import background from '../assets/starter_mobile.png';
import programming from '../assets/programming.jpg';
import Checkout from "../checkout/Checkout";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Snackbar from "@material-ui/core/Snackbar";




const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundImage:`url(${background})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
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
        marginTop: theme.spacing(4),
        marginLeft: '25%',
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
        width:1200,
        fontSize:'0.9rem',
        paddingLeft: 300,
    },
    copyright:{
        paddingTop:50,
    },
    font:{
        fontFamily:'Passion One,sans-serif',
        fontWeight:200,
        fontSize:'2.25rem',
        paddingLeft: 10,
        paddingTop:100,
        textAlign:'center',
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


export default function StarterMobile() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openSuccessToast, setOpenSuccessToast] = React.useState(false);
    const [openErrorToast, setOpenErrorToast] = React.useState(false);
    const [openCheckout, setOpenCheckout] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseSuccessToast = () => {
        setOpenSuccessToast(false);
    };

    const handleCloseErrorToast = () => {
        setOpenErrorToast(false);
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


    return (
       <main className={classes.layout} >
            {/*<div className={classes.root}>*/}

            <div className={classes.font}>Grow your business with CliquePass</div>


            <Button variant="outlined"  color="red" className={classes.button} onClick={handleClickOpen}>
                Interested? <br/>Let us contact you!
            </Button>

            {/*</div>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Snackbar open={openSuccessToast} autoHideDuration={6000} onClose={handleCloseSuccessToast}>
                <Alert onClose={handleCloseSuccessToast} severity="success">
                    You have successfully submitted your contact, we will call you shortly!
                </Alert>
            </Snackbar>
            <Snackbar open={openErrorToast} autoHideDuration={6000} onClose={handleCloseErrorToast}>
                <Alert onClose={handleCloseErrorToast} severity="error">
                    We are under system maintenance, please call us directly or wait for a while.
                </Alert>
            </Snackbar>
            <Dialog open={openCheckout} onClose={handleCheckoutClose} aria-labelledby="form-dialog-title">
                <Checkout/>
            </Dialog>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">We will contact you!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        We will get in touch with you as soon as possible, please leave your contacts below, as simple as that! Or if you are eager to get it done right now, you can contact us at <b>+65 97361988</b> or add Whatsapp at this number.
                    </DialogContentText>
                    <Formik
                        initialValues={{ email: '', name: '', phone: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true);
                            console.log(values);
                            (async function() {
                                let response = await axiosService.post('/potential_clients', values);
                                if (response.status === STATUS.CREATED) {
                                    setOpenSuccessToast(true);
                                    handleClose();
                                    setSubmitting(false);
                                } else {
                                    setOpenErrorToast(true);
                                    handleClose();
                                    setSubmitting(false);
                                }
                            })();
                        }}

                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email()
                                .required('Required'),
                            name: Yup.string()
                                .required('Required'),
                            phone: Yup.number()
                                .required('Required'),
                        })}
                    >
                        {(props) => {
                            const {
                                values,
                                touched,
                                errors,
                                dirty,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                handleReset,
                            } = props;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        autoFocus
                                        required
                                        margin="dense"
                                        id="name"
                                        label="Name"
                                        fullWidth
                                        value={values.name}
                                        error = {errors.name && touched.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={(errors.name && touched.name) && errors.name}
                                    />
                                    <TextField
                                        required
                                        margin="dense"
                                        id="email"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        value={values.email}
                                        error = {errors.email && touched.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={(errors.email && touched.email) && errors.email}
                                    />
                                    <TextField
                                        required
                                        margin="dense"
                                        id="phone"
                                        label="Phone Number"
                                        type="number"
                                        fullWidth
                                        value={values.phone}
                                        error = {errors.phone && touched.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={(errors.phone && touched.phone) && errors.phone}
                                    />
                                    <DialogActions>
                                        <Button basic  onClick={()=>{setOpen(false);handleReset()}} >
                                            Cancel
                                        </Button>
                                        <Button onClick={handleSubmit}   color="default" type="submit" disabled={isSubmitting}>
                                            Submit
                                        </Button>
                                    </DialogActions>
                                </form>
                            );
                        }}
                    </Formik>

                </DialogContent>
            </Dialog>
        </main>
    );
}
