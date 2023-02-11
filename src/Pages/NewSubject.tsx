import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {Alert, Select} from "@mui/material";
import * as Yup from 'yup';
import {Form, Formik, Field} from "formik";
import {ProfessorModel} from "../Models/Users/User";
import {getUserFromToken} from "../Services/AuthHelper";
import {NewSubjectModel, Subject} from "../Models/Subject";
import {apiRequestNewSubject} from "../Services/SubjectService";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";


const theme = createTheme();
const categories = ['All', 'Language', 'Science', 'Social', 'Arts'];
const levels = ['All', 'School', 'High School', 'College'];
export default function NewSubject() {
    const navigate = useNavigate();
    const [user, setUser] = useState<ProfessorModel>();
    const [category, setCategory] = useState<string>();
    const [level, setLevel] = useState<string>()
    const loadUser = async () => {
        setUser(await getUserFromToken());
    }
    useEffect(() => {loadUser();}, [])

    const [badCredentials, setBadCredentials] = useState(false);
    const newSubjectFormik = {
        initialValues: {
            name: "",
            level:"",
            category:"",
            description:""
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string(),
            level: Yup.string(),
            category: Yup.string()
        })
    }
    const handleSubmit = async (values: NewSubjectModel) => {
        try {
            apiRequestNewSubject(values)
            navigate('/');
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
                        New subject
                    </Typography>
                    <Formik {...newSubjectFormik} onSubmit={handleSubmit}>
                        {({values, errors}) => (
                            <Form>
                                {badCredentials ? <Alert severity="error">Something went wrong!</Alert> :
                                    <div></div>}
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="name"
                                    helperText={onError(errors['name'] || '')}
                                    label="Subject"
                                    name="name"
                                    size="small"
                                />
                                <Field
                                    as={Select}
                                    margin="none"
                                    fullWidth
                                    id="level"
                                    label="Level"
                                    name="level"
                                    size="small"
                                    sx={{mb:2}}
                                >
                                    {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        <ListItemText primary={category} />
                                    </MenuItem>
                                ))}
                                </Field>
                                <Field
                                    as={Select}
                                    margin="none"
                                    fullWidth
                                    id="category"
                                    label="Category"
                                    name="category"
                                    size="small"
                                    sx={{mb:2}}
                                >
                                    {levels.map((level) => (
                                        <MenuItem key={level} value={level}>
                                            <ListItemText primary={level} />
                                        </MenuItem>))}
                                </Field>
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