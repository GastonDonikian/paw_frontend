import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Avatar, CardActionArea} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typography from '@mui/material/Typography';
import '../../App.css';

export default function EmailHome() {
    return (
        <Card>
            <CardActionArea sx={{ p:2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: '#349AC2' }}>
                    <EmailOutlinedIcon />
                </Avatar>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Want to improve the page or give us feedback?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Send us an email
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}