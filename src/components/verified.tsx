import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions} from '@mui/material';
import '../App.css';

export default function Verified() {
    return (
        <Grid item xs={3} className="cardUnverified">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="./images/random.jpeg"
                        alt="profile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            John Lennon
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Your account was verified!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Start
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    );
}