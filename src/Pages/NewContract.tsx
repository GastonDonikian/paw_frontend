import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate, useParams} from "react-router-dom";
import {Alert} from "@mui/material";
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";
import {CreateContractInterface} from "../Models/Contract";
import {apiGetSubject} from "../Services/SubjectService";
import {Subject} from "../Models/Subject";
import {apiCreateContract} from "../Services/ContractService";


const theme = createTheme();

export default function NewContract() {
    const navigate = useNavigate();
    let {id} = useParams();
    const [subject,setSubject] = useState<Subject>();
    const getCurrentSubject = async () => {
        const subj =  await apiGetSubject(parseInt(id || '-1'));
        setSubject(subj)
    }

    useEffect(() => {
        getCurrentSubject()
    },[])

    const [badCredentials, setBadCredentials] = useState(false);
    const newContractFormik = {
        initialValues: {
            description: "",
            local: false,
            remote: false,
            price: 0.0
        },
        validationSchema: Yup.
        object().shape({
            description: Yup.string()
                .required("Description is required!"),
            price: Yup.number().required("Your lessons need a price!")})
    }
    const handleSubmit = async (values: CreateContractInterface) => {
        try {
            await apiCreateContract(parseInt(id || '-1'), values.description, values.local, values.remote, values.price)
            navigate('/mysubjects');
        } catch (error: any) {
            setBadCredentials(true);
        }
    }
    const onError = (error: string) => {
        if (error !== '')
            return (<div>{error}</div>)
        return (<br/>)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 5,
                        marginBottom: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'white',
                        paddingTop: 2,
                        paddingLeft: 3,
                        paddingRight: 3,
                        paddingBottom: 3,
                        borderRadius: '5px',
                        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Teach subject
                    </Typography>
                    <Formik {...newContractFormik} onSubmit={handleSubmit}>
                        {({values, errors}) => (
                            <Form>
                                {badCredentials ? <Alert severity="error">Something went wrong!</Alert> :
                                    <div></div>}
                                 <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="subject"
                                    helperText={onError( '')}
                                    label="Subject"
                                    name="subject"
                                    InputLabelProps={{ shrink: true }}
                                    value={subject?.name}
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="description"
                                    helperText={onError(errors['description'] || '')}
                                    label="Description"
                                    name="description"
                                    size="small"
                                />
                                <label>
                                    <Field fullWidth type="checkbox" id="local" name="local"/>
                                    Local
                                </label>
                                <label>
                                    <Field fullWidth type="checkbox" id="remote" name="remote"/>
                                    Remote
                                </label>
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="price"
                                    helperText={onError(errors['price'] || '')}
                                    label="Price per hour"
                                    name="price"
                                    size="small"
                                />
                                <Grid direction="row" justifyContent="flex-end"
  alignItems="center" sx={{display: 'flex'}}>

                                <Grid item>
                                <Button
                                    type="submit"
                                    
                                    variant="contained"
                                    sx={{ mb: 1, bgcolor: '#349AC2'}}
                                >
                                    Send
                                </Button></Grid></Grid>
                                
                            </Form>)}
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    );
}