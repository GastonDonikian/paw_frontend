import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions} from '@mui/material';
import '../../App.css'


export default function StudentProfile() {
    return (
        <Container component="main" maxWidth="xl" sx={{mt: 5,}} >
        <Grid xs={12}>
             <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={5} 
                    >
            <Grid item xs={4}>
                <Card>
                <CardActionArea sx={{ p:2, display: 'flex', alignItems: 'flex-start'}}>
                
                    <Grid
                    container
                    direction="row"
                    
                    spacing={2} 
                    >
                        <Grid item xs={3}  >
                            <img src="./profilePhoto.jpeg" height={80} />
                        </Grid>
                        <Grid item xs={9}>
                        <Typography gutterBottom variant="h5" component="div">
                            Name + Apellido insertar
                        </Typography>
                        <Button
                            
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#349AC2',   }}
                            
                        >
                            Edit Profile
                        </Button>
                        </Grid>
                    </Grid>
                
                   
                </CardActionArea>
            </Card>

            
                        </Grid>
                        <Grid item xs={8}>
                        <Card>
                <CardActionArea sx={{ p:2, textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src="./book.png" height={80} />
                    <CardContent>
                        
                    <Typography variant="body2" color="white" sx={{p: '4px 10px', mb: 2, background: '#00579E', borderRadius: '30px', display: 'inline-block'}}>
                            Student
                        </Typography>


                        <Typography variant="body2" color="text.secondary">
                            Want to find professors and learn from them?
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                        </Grid>
                    </Grid>
        </Grid>
       
        
        </Container>
    );
}