import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions, CardHeader, CircularProgress} from '@mui/material';
import '../App.css'
import * as React from "react";
import {useNavigate} from "react-router-dom";
import DisplayMySubject from '../components/DisplayMySubject';



export default function MySubjects() {
    
    return (
        <Container component="main" maxWidth="xl" sx={{mt: 5,}} >
        <Grid xs={12}>
             <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={5} 
                    >
            <Grid item xs={6}>
            <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                       backgroundColor: 'white',
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       alignItems: 'flex-start', paddingBottom: 2}}>
                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Grid justifyContent="space-between" direction="row" sx={{display: 'flex'}}>
                               <Grid item><Typography variant="h5" gutterBottom component="div" sx={{mb:0}} >
                                Subjects
                            </Typography></Grid> <Grid item>
                            <Button>Add Subject</Button></Grid></Grid>
                        </Container>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <DisplayMySubject title="analisis" description="la doy practica :)"
                        active={true} />
                        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                            <Divider variant="inset" component="li" sx={{ml:0}} />
                        </List>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                       backgroundColor: 'white',
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       alignItems: 'flex-start', paddingBottom: 2}}>
                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Typography variant="h5" gutterBottom component="div" sx={{mb:0}} >
                                Subjects on hold 
                            </Typography>
                        </Container>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <DisplayMySubject title="matematica" description="la doy re bien :)"
                        active={false} />
                        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                        <DisplayMySubject title="matematica" description="la doy re bien :)"
                        active={false} />
                        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                        </List>
                    </div>
                </Grid>

            </Grid>
        </Grid>
        </Container>
    );
}