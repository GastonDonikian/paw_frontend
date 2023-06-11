import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Avatar, CardActionArea} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typography from '@mui/material/Typography';
import '../../App.css';
import {intl} from "../../i18n/i18n";

export default function EmailHome() {
    return (
        <Card>
            <CardActionArea sx={{ p:2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: '#349AC2' }}>
                    <EmailOutlinedIcon />
                </Avatar>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {intl.formatMessage({ id: 'improve_feedback' })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {intl.formatMessage({ id: 'send_email' })}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}