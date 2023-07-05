import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import {Alert} from "@mui/material";
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";
import {apiEditProfessor} from "../../Services/UserService";
import {getUserFromToken} from "../../Services/AuthHelper";
import {ProfessorModel} from "../../Models/Users/User";
import {EditProfessorModel} from "../../Models/Users/EditProfessorModel";
import {intl} from "../../i18n/i18n";


const theme = createTheme();

export default function EditStudentProfile() {
    const navigate = useNavigate();
    const [badCredentials, setBadCredentials] = useState(false);
    const [user, setUser] = useState<ProfessorModel>();


    const loadUser = async () => {
        setUser(await getUserFromToken());
    }
    useEffect(() => {loadUser();}, [])

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const editProfessorFormik = {
        initialValues: {
            email: user?.email,
            name: user?.name,
            surname: user?.surname,
            phoneNumber: user?.phoneNumber,
            schedule: user?.schedule,
            studies: user?.studies,
            description: user?.description
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(3, intl.formatMessage({ id: 'error_name_longer' }))
                .max(40, intl.formatMessage({ id: 'error_name_shorter' })),
            surname: Yup.string()
                .min(3, intl.formatMessage({ id: 'error_surname_longer' }))
                .max(40, intl.formatMessage({ id: 'error_surname_shorter' })),
            phoneNumber: Yup.string().matches(phoneRegExp, intl.formatMessage({ id: 'error_phone_invalid' })),
            schedule: Yup.string()
                .max(30, intl.formatMessage({ id: 'error_schedule_shorter' })),
            studies: Yup.string()
                .min(4, intl.formatMessage({ id: 'error_studies_longer' }))
                .max(40, intl.formatMessage({ id: 'error_studies_shorter' })),
            description: Yup.string()
                .max(200, intl.formatMessage({ id: 'error_description_shorter' }))
        })
    }
    const handleSubmit = async (values: EditProfessorModel) => {
        try {
            await apiEditProfessor(values);
            navigate('/professorProfile');
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

                    <Formik initialValues={editProfessorFormik.initialValues} validationSchema={editProfessorFormik.validationSchema} onSubmit={handleSubmit}>
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
                                    label={intl.formatMessage({ id: 'name' })}
                                    InputLabelProps={{ shrink: true }}
                                    placeholder={user?.name}
                                    name="name"
                                    size="small"
                                    sx={{mt:2}}
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="surname"
                                    helperText={onError(errors['surname'] || '')}
                                    InputLabelProps={{ shrink: true }}
                                    placeholder={user?.surname}
                                    label={intl.formatMessage({ id: 'surname' })}
                                    name="surname"
                                    size="small"
                                />
                                
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    size="small"
                                    id="email"
                                    InputLabelProps={{ shrink: true }}
                                    value={user?.email}
                                    disabled
                                    helperText={onError( '')}
                                    label={intl.formatMessage({ id: 'email_address' })}
                                    name="email"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="phoneNumber"
                                    InputLabelProps={{ shrink: true }}
                                    placeholder={user?.phoneNumber}
                                    helperText={onError(errors['phoneNumber'] || '')}
                                    label={intl.formatMessage({ id: 'phone_number' })}
                                    name="phoneNumber"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="schedule"
                                    helperText={onError(errors['schedule'] || '')}
                                    label={intl.formatMessage({ id: 'schedule' })}
                                    InputLabelProps={{ shrink: true }}
                                    placeholder={user?.schedule}
                                    name="schedule"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="studies"
                                    helperText={onError(errors['studies'] || '')}
                                    label={intl.formatMessage({ id: 'studies' })}
                                    InputLabelProps={{ shrink: true }}
                                    placeholder={user?.studies}
                                    name="studies"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="description"
                                    helperText={onError(errors['description'] || '')}
                                    label={intl.formatMessage({ id: 'description' })}
                                    InputLabelProps={{ shrink: true }}
                                    placeholder={user?.description}
                                    name="description"
                                    size="small"
                                />
                                <Grid direction="row" justifyContent="flex-end"
  alignItems="center" sx={{display: 'flex'}}>
                                <Grid item>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mb: 1, bgcolor: '#349AC2'}}
                                >
                                    {intl.formatMessage({ id: 'save_changes' })}
                                </Button></Grid></Grid>
                            
                            </Form>)}
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    );
}