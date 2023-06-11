import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Avatar, CardActionArea} from '@mui/material';
import Typography from '@mui/material/Typography';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import '../../App.css';
import {intl} from "../../i18n/i18n";

export default function RegisterHome() {
    return (
            <Card>
                <CardActionArea sx={{ p:2, textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: '#349AC2' }}>
                    <LibraryBooksOutlinedIcon />
                </Avatar>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {intl.formatMessage({ id: 'prof_or_student' })}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {intl.formatMessage({ id: 'register_start' })}
                        </Typography>
                    </CardContent>                
                </CardActionArea>
            </Card>
    );
}