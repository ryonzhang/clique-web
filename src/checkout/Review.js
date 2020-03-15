import React ,{useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SignatureCanvas from 'react-signature-canvas'
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import axiosService from "../clients/api";
import {STATUS} from "../constants";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert/Alert";



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
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));

export default function Review(props) {
    const classes = useStyles();
    const [openSuccessToast, setOpenSuccessToast] = React.useState(false);
    const [openErrorToast, setOpenErrorToast] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    const signature = useRef();

    const setDisable = ()=>{
        setDisabled(false);
    };
    const handleCloseSuccessToast = () => {
        setOpenSuccessToast(false);
    };

    const handleCloseErrorToast = () => {
        setOpenErrorToast(false);
    };

    const confirm = async ()=>{
        let response = await axiosService.post('/clients', {...props.value,signature:signature.current.getTrimmedCanvas().toDataURL('image/png')});
        if (response.status === STATUS.CREATED) {
            setOpenSuccessToast(true);
            setTimeout(props.close,2000);
        } else {
            setOpenErrorToast(true);
        }
    }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Please sign below:
      </Typography>
      <Paper>
      <SignatureCanvas ref={signature} penColor='blue'
                       canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} onEnd={setDisable}/>
      </Paper>
        <div className={classes.buttons}>
                <Button onClick={props.handleBack} className={classes.button}>
                    Back
                </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={confirm}
                className={classes.button}
                disabled={disabled}
            >
                Confirm
            </Button>
        </div>
        <Snackbar open={openSuccessToast} autoHideDuration={6000} onClose={handleCloseSuccessToast}>
            <Alert onClose={handleCloseSuccessToast} severity="success">
                Welcome aboard, we will contact you before launch date to prepare you up!
            </Alert>
        </Snackbar>
        <Snackbar open={openErrorToast} autoHideDuration={6000} onClose={handleCloseErrorToast}>
            <Alert onClose={handleCloseErrorToast} severity="error">
                We are under system maintenance, please call us directly or wait for a while.
            </Alert>
        </Snackbar>
    </React.Fragment>
  );
}
