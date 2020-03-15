import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
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
    button: {
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(1),
},
  text:{
    color: 'red',
  fontsize: 'smaller',
  paddingLeft: '12px',
  marginTop: '-18px',
  },
}));
export default function PaymentForm(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Our Promises to You
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Typography
              component="span"
              variant="body1"
              color="textPrimary"
          >
            One year free membership privileges including but not limited to:
          </Typography>
          <br/>
          <Typography
              component="span"
              variant="body2"
              color="textPrimary"
          >
            1.maintenance of parter information on our platform
          </Typography>
          <br/>
          <Typography
              component="span"
              variant="body2"
              color="textPrimary"
          >
            2.professional marketing services
          </Typography>
          <br/>
          <Typography
              component="span"
              variant="body2"
              color="textPrimary"
          >
            3.registration and of courses and enrolment of clients
          </Typography>
          <br/>
          <br/>
          <Typography
              component="span"
              variant="caption"
              color="textPrimary"
          >
            Our staff will contact you two months prior to the launch date to negotiate the concrete terms and conditions.Courses on our platform will be subject to a negotiated rate of commission and any update of terms or conditions will be communicated clearly before hand and mutually agreed upon before taking effect.
          </Typography>

        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" onChange={event=>{setChecked(event.target.checked)}} />}
            label="I will accept the free membership upon ticking"
          />
        </Grid>
        {
          !checked && <body1 className={classes.text} >Please tick this box to proceed</body1>
        }

      </Grid>
      <div className={classes.buttons}>
            <Button onClick={props.handleBack} className={classes.button}>
              Back
            </Button>
        <Button
            variant="contained"
            color="primary"
            onClick={()=>{
              props.handleNext();
              console.log(props.value);
            }}
            disabled={!checked}
            className={classes.button}
        >Next
        </Button>
      </div>
    </React.Fragment>
  );
}
