import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import axiosService from "../clients/api";
import {STATUS} from "../constants";
import * as Yup from "yup";
import DialogActions from "@material-ui/core/DialogActions";
import {Formik} from "formik";
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
}));
const categories = [
    { category: 'Culinary & Baking ', id: 1 },
    { category: 'Art & Craft', id: 2 },
    { category: 'Development Skills', id: 3 },
    { category: 'Performing Arts', id: 4 },
    { category: 'Programming', id: 5 },
    { category: 'Photography Skills', id: 6 },
    { category: 'Sport & Fitness', id: 7 },
    ];

export default function AddressForm(props) {
    const classes = useStyles();
    const outerProps = props;
    const [cat, setCat] = React.useState([]);
  return (

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Course Information
      </Typography>
        <Formik
            initialValues= {props.value}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                props.updateValue({...values,categories:cat});
                props.handleNext();
            }}

            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required('Required'),
                name: Yup.string()
                    .required('Required'),
                phone: Yup.number()
                    .required('Required'),
                company_name: Yup.string()
                    .required('Required'),
                uen: Yup.string()
                    .required('Required'),
                studio_count: Yup.number()
                    .required('Required'),
                categories:Yup.array().of(Yup.number())
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
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
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
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="company_name"
                                    name="company_name"
                                    label="Company Name"
                                    fullWidth
                                    value={values.companyName}
                                    error = {errors.companyName && touched.companyName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.companyName && touched.companyName) && errors.companyName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    margin="dense"
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"
                                    type="number"
                                    fullWidth
                                    value={values.phone}
                                    error = {errors.phone && touched.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.phone && touched.phone) && errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="uen"
                                    name="uen"
                                    label="UEN No."
                                    fullWidth
                                    value={values.uen}
                                    error = {errors.uen && touched.uen}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.uen && touched.uen) && errors.uen}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="studio_count"
                                    name="studio_count"
                                    label="No. of Studios"
                                    type="number"
                                    fullWidth
                                    value={values.studio_count}
                                    error = {errors.studio_count && touched.studio_count}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.studio_count && touched.studio_count) && errors.studio_count}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Autocomplete
                                    required
                                    multiple
                                    id="categories"
                                    name="categories"
                                    options={categories}
                                    getOptionLabel={option => option.category}
                                    onChange={(event,value)=>{
                                        console.log(value);
                                        setCat(value.map(i=>i.id));
                                    }}
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
                        </Grid>
                        <div className={classes.buttons}>
                            <Button onClick={outerProps.handleBack} className={classes.button}>
                                Back
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={()=>{handleSubmit();}} color="primary" type="submit" disabled={isSubmitting}
                            >Next
                            </Button>
                        </div>
                    </form>
                );
            }}
        </Formik>

    </React.Fragment>
  );
}
