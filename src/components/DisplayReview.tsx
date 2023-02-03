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

const DisplayReview = (props: any) => {

    let name: string = props.name;
    let review: string = props.review;
    let rating: number = props.rating;
    let surname: string = props.surname;
    let date: string = props.date;


    return (
        <div>
            <ListItem alignItems="flex-start">
                <Container sx={{
                    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', bgcolor: 'white',
                    flexDirection: 'column', p: 2, display: 'flex',
                    alignItems: 'flex-start', border: '1px solid rgba(0,0,0,.150)',
                    borderRadius: '0.25rem'
                }}>
                     <Grid
                    container
                    direction="row"
                    sx={{display: 'flex'}}
                    spacing={2}
                >
                    <Grid item xs={1}  >
                        <img src="./profilePhoto.jpeg" height={60} />
                    </Grid>
                    <Grid item xs={5} >
                        <Typography gutterBottom variant="h5" component="div" sx={{ml: 2, mb: 0 }}>
                            {name} {surname}
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ml:2,  mb: 0 }}>
                            {date}
                        </Typography>

                    </Grid>
                    <Grid item xs={6} sx={{justifyContent: 'flex-end', textAlign: 'end'}}>
                    <Rating name="read-only" value={rating} readOnly />
                        <Typography gutterBottom component="div" sx={{ mb: 0 }}>
                            {review}
                        </Typography>
                        
                    </Grid>
                </Grid>

                   
                   
                </Container>
            </ListItem>



        </div>

    );
}

export default DisplayReview;