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
import {
    Formik,
} from 'formik';
import * as Yup from 'yup';

import music from '../assets/music.jpg';
import china from '../assets/china.jpg';
import drawing from '../assets/drawing.jpg';
import instruments from '../assets/instruments.png';
import speech from '../assets/speech.jpg';
import mission from '../assets/mission.jpg';
import programming from '../assets/programming.jpg';
import Checkout from "../checkout/Checkout";




const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundImage:`url(${mission})`,
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
        marginTop: theme.spacing(3),
        marginLeft: 500,
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
    font:{
        fontFamily:'Passion One,sans-serif',
        fontWeight:400,
        fontSize:'4.25rem',
        paddingRight: 300,
        paddingTop:50,
        paddingLeft:500,
    },
    smallFont:{
        fontFamily:'Passion One,sans-serif',
        fontWeight:30,
        fontSize:'1.75rem',
        paddingRight: 30,
        paddingTop:20,
        float:'right',
        lineHeight:0.5,
    }
}));



export default function Mision() {
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


    return (
        <React.Fragment>
            <main className={classes.layout} >
                {/*<div className={classes.root}>*/}

                <div className={classes.font}>Our Vision</div>


                            <div className={classes.smallFont}>
                                We aim to build a community for children to explore and grow their talents <p/>

                                Very often, we as parents are unsure about our children’s strength and weaknesses.<p/>
                                Clique pledge to help parents identify your children’s forte by connecting them to different activities at a minimum cost!<p/>

                                Join us in the journey and list your unsold class spots with us to maximize your revenue<p/>

                            </div>
                            {/*<Button variant="contained"  className={classes.button} onClick={handleCheckoutClickOpen}>*/}
                            {/*    I'm in! Register me!*/}
                            {/*</Button>*/}

                {/*</div>*/}
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
                            initialValues={{ email: '', name: '', comment: '' }}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(true);
                                // axios.post(contactFormEndpoint,
                                //     values,
                                //     {
                                //       headers: {
                                //         'Access-Control-Allow-Origin': '*',
                                //         'Content-Type': 'application/json',
                                //       }
                                //     },
                                // ).then((resp) => {
                                //       setSubmitionCompleted(true);
                                //     }
                                // );
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
                                            <Button onClick={handleReset} color="primary">
                                                Cancel
                                            </Button>
                                            <Button onClick={handleSubmit} color="primary" type="submit" disabled={isSubmitting}>
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
        </React.Fragment>
    );
}
