import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const categories = [
    { category: 'Culinary & Baking ', id: 1 },
    { category: 'Art & Craft', id: 1972 },
    { category: 'Development Skills', id: 1974 },
    { category: 'Performing Arts', id: 2008 },
    { category: 'Programming', id: 1 },
    { category: 'Photography Skills', id: 1972 },
    { category: 'Sport & Fitness', id: 1974 },
    ];

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Course Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companyName"
            name="companyName"
            label="Company Name"
            fullWidth
            autoComplete="company-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              required
              id="phone-number"
              name="phoneNumber"
              label="Phone Number"
              type="number"
              fullWidth
              autoComplete="phone-number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="uen-no"
            name="uenNo"
            label="UEN No."
            fullWidth
            autoComplete="uen-no"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="studio-count"
            name="studio-count"
            label="No. of Studios"
            fullWidth
            autoComplete="studio-count"
          />
        </Grid>
        <Grid item xs={12} >
          <Autocomplete
              multiple
              id="tags-categories"
              options={categories}
              getOptionLabel={option => option.category}
              defaultValue={[]}
              renderInput={params => (
                  <TextField
                      {...params}
                      variant="standard"
                      label="Categories"
                  />
              )}
          />
        </Grid>
        {/*<Grid item xs={12}>*/}
        {/*  <FormControlLabel*/}
        {/*    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}*/}
        {/*    label="Use this address for payment details"*/}
        {/*  />*/}
        {/*</Grid>*/}
      </Grid>
    </React.Fragment>
  );
}
