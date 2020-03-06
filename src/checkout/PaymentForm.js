import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from "@material-ui/core/Divider";

export default function PaymentForm() {
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
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="I will accept the free membership upon ticking"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
