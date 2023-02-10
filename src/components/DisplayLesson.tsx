import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Grid, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

const DisplayLesson = (props: any) => {

    let name: string = props.name;
    let email: string = props.email;
    let surname: string = props.surname;


    return (
        
            
            <div style={{ border: '1px solid rgba(0,0,0,.150)',
                       backgroundColor: 'white', 
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       marginBottom: 8,
                       alignItems: 'flex-start', paddingBottom: 2}}>
                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                           <Typography>subject</Typography>
                        </Container>
                   <ListItem alignItems="flex-start" >     
                
                     <Grid
                    container

                    justifyContent="flex-end"
                    direction="row"
                    sx={{display: 'flex', p:2}}
                    spacing={2}
                >
                    <Grid item xs={1}  >
                        <img src="./profilePhoto.jpeg" height={60} />
                    </Grid>
                    <Grid item xs={3} >
                        <Typography gutterBottom variant="h5" component="div" sx={{ml: 2, mb: 0 }}>
                            {name} {surname}
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ml:2,  mb: 0 }}>
                            {email}
                        </Typography>

                    </Grid>
                    <Grid item xs={8} sx={{justifyContent: 'flex-end', textAlign: 'end'}}>
                        {props.children}
                    </Grid>
                </Grid>

                   
            </ListItem>

</div>

    );
}

export default DisplayLesson;