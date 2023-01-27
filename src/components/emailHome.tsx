
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions} from '@mui/material';
import '../App.css';

export default function EmailHome() {
    return (
        <Card sx={{height: '100%'}} >
            <CardActionArea sx={{p:2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: '#349AC2' }}>
                    <EmailOutlinedIcon />
                </Avatar>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Give us your opinion
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Send us an email
                    </Typography>
                </CardContent>
            
            </CardActionArea>
        </Card>
    );
}