import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid} from '@mui/material';
import '../../App.css';
import {useNavigate} from "react-router-dom";
import {intl} from "../../i18n/i18n";


export default function Register() {
    return (
        <Container component="main" maxWidth="xl" sx={{mt: 5,}} >
            <Grid item xs={12}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={5}
                >
                    <Grid item xs={3}>
                        <Card sx={{height: 230}}>
                            <CardActionArea href="/registerProfessor" sx={{ p:2, textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img src="./book.png" height={80} />
                                <CardContent>
                                    <Typography variant="body2" color="white" sx={{p: '4px 10px', mb: 2, background: '#00579E', borderRadius: '30px', display: 'inline-block'}}>
                                        {intl.formatMessage({ id: 'professor' })}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {intl.formatMessage({ id: 'want_teach' })}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{height: 230}}>
                            <CardActionArea href="/registerStudent" sx={{ p:2, textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img src="./book.png" height={80} />
                                <CardContent>
                                    <Typography variant="body2" color="white" sx={{p: '4px 10px', mb: 2, background: '#00579E', borderRadius: '30px', display: 'inline-block'}}>
                                        {intl.formatMessage({ id: 'student' })}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {intl.formatMessage({ id: 'want_find_professor' })}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>


        </Container>
    );
}