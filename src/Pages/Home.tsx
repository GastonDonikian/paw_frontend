import {UserModel} from "../Models/User";
import RegisterHome from "../components/registerHome";
import EmailHome from "../components/emailHome";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchHome from "../components/searchHome";

export default function Home() {
    return(
        <Container component="main" maxWidth="xl" sx={{mt: 2,}} >
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
                        <Grid item xs={4}>
                            <RegisterHome/>
                        </Grid>
                        <Grid item xs={4}>
                            <EmailHome/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            
            {/*<Grid container spacing={2} justifyContent="center" alignItems="center" >
                <Grid item xs={12}>
                    <SearchHome/>
                </Grid>
                <Grid item xs={4}>
                    <RegisterHome/>
                </Grid>
                <Grid item xs={4}>
                <EmailHome/>
                </Grid>
    </Grid>*/}
            
            
        </Container>
   
    );
}