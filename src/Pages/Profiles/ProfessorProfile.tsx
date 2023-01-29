import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions, CardHeader, CircularProgress} from '@mui/material';
import '../../App.css'
import DisplayListItem from '../../components/DisplayListItem';
import { padding } from '@mui/system';
import {useEffect, useState} from "react";
import {ProfessorModel} from "../../Models/Users/User";
import {getUserFromToken, getUserId} from "../../Services/AuthHelper";
import * as React from "react";
import {Subject} from "../../Models/Subject";
import {apiGetSubjects} from "../../Services/UserService";


export default function ProfessorProfile() {

    const [user, setUser] = useState<ProfessorModel>();
    const [subjects, setSubjects] = useState<[Subject]>();

    const loadUser = async () => {
        setUser(await getUserFromToken());
    }
    const loadSubjects = async () => {
        setSubjects(await apiGetSubjects(getUserId()))
    }

    useEffect( () => {loadUser(); loadSubjects()},
        [])

    return (
        <div>
             <Container component="div" maxWidth="xl" sx={{pt: 1, pb: 1, mt: 0, bgcolor: 'white'}} >
             <Grid
                    container
                    direction="row"
                    spacing={2} 
                    >
                        <Grid item xs={1}  >
                            <img src="./profilePhoto.jpeg" height={80} />
                        </Grid>
                        <Grid item >
                        <Typography gutterBottom variant="h5" component="div" sx={{mb:0}}>
                            {user ? (user.name + ' ' + user.surname) : <CircularProgress/> }
                        </Typography>
                        <Typography gutterBottom component="p" sx={{mb:0}}>
                            {user ? (user.email) : <CircularProgress/> }
                        </Typography>
                        <Rating name="read-only" value={3} readOnly />
                        </Grid>
                    </Grid>
             </Container>
       
        <Container  maxWidth="xl" sx={{mt: 5,}} >
        <Grid xs={12}>
             <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={5} 
                    >
            <Grid item xs={4}>
                
                <Container sx={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', mb:5, bgcolor: 'white', flexDirection: 'column', borderRadius: '5px', p:2, display: 'flex', alignItems: 'flex-start'}}>
                    <Typography gutterBottom variant="h6" component="div" sx={{mb:0}}>
                            About {user ? (user.name + ' ' + user.surname) : <CircularProgress/> }
                        </Typography>
                   <Typography>{user ? (user.description) : <CircularProgress/> }</Typography>
                </Container>
                <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                       backgroundColor: 'white', 
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       marginTop: 3,
                       alignItems: 'flex-start', paddingBottom: 2}}>
                    

                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Typography variant="h5" gutterBottom component="div" sx={{mb:0}} >
                                Subjects {subjects?.length}
                            </Typography>
                        </Container>
                        <List sx={{pb:2, pl:2, pr:2, width: '100%', bgcolor: 'background.paper' }}>
                        {subjects && (subjects.length > 0 ?subjects.map((subject: any) => (
                            <div><DisplayListItem title={subject.name} description={subject.category}/>
                                <Divider variant="inset" component="li" sx={{ml:0}} /></div>
                        )) : <CircularProgress/>)}
                        </List>
                    </div>
            
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
                                 information
                            </Typography>
                        </Container>
                        <List sx={{pb:2, pl:2, pr:2, width: '100%', bgcolor: 'background.paper' }}>
                            <DisplayListItem title="Mail" description={user && user.email}/>
                            <Divider variant="inset" component="li" sx={{ml:0}} />
                        </List>
                        


                    </div>
                </Grid>

            </Grid>
        </Grid>
       
        
        </Container>
        </div>
    );
}