import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Avatar, CardActionArea} from '@mui/material';
import Typography from '@mui/material/Typography';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import '../../App.css';

export default function MissingSubject() {
    return (
            <Card>
                <CardActionArea sx={{ p:2, textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: '#349AC2' }}>
                    <LibraryBooksOutlinedIcon />
                </Avatar>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Want to teach or learn a new subject?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            If you think a subject is missing, fill in this form
                        </Typography>
                    </CardContent>                
                </CardActionArea>
            </Card>
    );
}