import RegisterHome from "../components/home/registerHome";
import EmailHome from "../components/home/emailHome";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchHome from "../components/home/searchHome";
import "../App.css"
import {isAuthenticated} from "../Services/AuthHelper";
import MissingSubject from "../components/home/missingSubject";


export default function Home() {
    return(
        <Container component="main" maxWidth="xl" sx={{mt: 2, pb: 2}} >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2} 
            >
                <Grid item xs={12}>
                    <SearchHome/>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2} 
                    >
                        {!isAuthenticated() ?
                        <Grid item xs={4} alignItems="stretch" component="a"
                        href="/register" sx={{textDecoration: 'none' }}>
                            <RegisterHome/>
                        </Grid> :
                        <Grid item xs={4} alignItems="stretch" component="a"
                        href="/newSubject" sx={{textDecoration: 'none' }}>
                            <MissingSubject/>
                        </Grid>
                        }
                        <Grid item  alignItems="stretch" xs={4} >
                            <EmailHome/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
   
    );
}