import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions, CardHeader, CircularProgress} from '@mui/material';
import '../../App.css'
import DisplayListItem from '../../components/DisplayListItem';
import {useEffect, useState} from "react";
import {getUserFromToken} from "../../Services/AuthHelper";
import {UserModel} from "../../Models/Users/User";
import * as React from "react";


export default function StudentProfile() {

    const [user, setUser] = useState<UserModel>();

    const loadUser = async () => {
        setUser(await getUserFromToken());
    }

    useEffect( () => {loadUser()},
        [])

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
            <Grid item xs={4}>
                
                <Container sx={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', bgcolor: 'white', borderRadius: '5px', p:2, display: 'flex', alignItems: 'flex-start'}}>
                
                    <Grid
                    container
                    direction="row"
                    
                    spacing={2} 
                    >
                        <Grid item xs={3}  >
                            <img src="./profilePhoto.jpeg" height={80} />
                        </Grid>
                        <Grid item xs={9}>
                        <Typography gutterBottom variant="h5" component="div">

                            {user ? (user.name + ' ' + user.surname) : <CircularProgress/> }
                        </Typography>
                        <Button
                            
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#349AC2',   }}
                        >
                            Edit Profile
                        </Button>
                        </Grid>
                    </Grid>
                </Container>
            

            
                </Grid>
                <Grid item xs={8}>
                    <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                       backgroundColor: 'white',
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       alignItems: 'flex-start', paddingBottom: 2}}>


                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Typography variant="h5" gutterBottom component="div" sx={{mb:0}} >
                                Contact information
                            </Typography>
                        </Container>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {user ? <DisplayListItem title="Mail" description={user.email}/> : <CircularProgress/> }
                            <Divider variant="inset" component="li" sx={{ml:0}} />
                        </List>
                    </div>
                </Grid>

            </Grid>
        </Grid>
        </Container>
    );
}