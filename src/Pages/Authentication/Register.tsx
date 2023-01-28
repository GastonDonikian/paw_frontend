import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions} from '@mui/material';
import '../../App.css';


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
                                        Professor
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        Want to teach, sell courses and more?
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
                                        Student
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Want to find professors and learn from them?
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