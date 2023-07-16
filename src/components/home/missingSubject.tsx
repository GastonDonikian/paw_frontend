import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Avatar, CardActionArea} from '@mui/material';
import Typography from '@mui/material/Typography';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import '../../App.css';
import {intl} from "../../i18n/i18n";

export default function MissingSubject() {
    return (
            <Card>
                <CardActionArea sx={{ p:2, textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar data-testid="avatar" sx={{ m: 1, bgcolor: '#349AC2' }}>
                    <LibraryBooksOutlinedIcon />
                </Avatar>
                    <CardContent data-testid="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                            {intl.formatMessage({ id: 'teach_new_subject'})}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {intl.formatMessage({ id: 'subject_missing'})}
                        </Typography>
                    </CardContent>                
                </CardActionArea>
            </Card>
    );
}