import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import {Button, Divider, Grid, Typography} from '@mui/material';
import ChatMessages from './ChatMessages';
import {intl} from "../../i18n/i18n";


export default function Chat(){

    const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //let authenticationData;
        console.log(data.get('search') as string);
    }

    return(
        
            <Grid container direction='column' sx={{display: 'flex'}}>


          
            <Grid container
                    justifyContent="flex-start"
                    direction="row"
                    sx={{display: 'flex', p:2}}
                    spacing={2}
                >
                    <Grid item   >
                        <img src="./profilePhoto.jpeg" height={40} />
                    </Grid>
                    <Grid item  >
                        <Typography gutterBottom variant="h6" component="div" sx={{ml: 1, mb: 0, fontWeight: 'bold' }}>
                            name prof/student
                        </Typography>
                        
                    </Grid>
                    </Grid>
            

<Divider></Divider>

<div id="chatMessages" className="chat-messages p-4" style={{display: 'flex', flexDirection: 'column', maxHeight: '350px', minHeight: '350px' , overflowY: 'scroll'}}>
                                                                        
                            <ChatMessages></ChatMessages>      
                                                        </div>

                <Container component="form" noValidate onSubmit={handleSearchSubmit} sx={{ flexDirection: 'row', mt: 1 }}>
                    <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <TextField
                                id="search"
                                name="search"
                                fullWidth
                                placeholder={intl.formatMessage({ id: 'type_message'})}
                                variant="outlined"
                                size="small"
                                sx={{ mt: 2, mb: 2 }}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                
                                variant="contained"
                                sx={{ bgcolor: '#349AC2' }}
                            >
                                {intl.formatMessage({ id: 'send'})}
                            </Button>
                        </Grid>
                    </Grid>
                </Container>

          </Grid>

    );
}