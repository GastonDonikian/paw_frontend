import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import FilterOrderBy from '../components/filter/FilterOrderBy';
import FilterLevel from '../components/filter/FilterLevel';

import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions, CardHeader} from '@mui/material';
import '../App.css'
import DisplayListItem from '../components/DisplayListItem';
import { padding } from '@mui/system';
import ContractCard from '../components/ContractCard';
import FilterModality from '../components/filter/FilterModality';


export default function ProfessorProfile() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //let authenticationData;
        console.log(data.get('search') as string);
    }

    const categories = ['All', 'Language', 'Science', 'Social', 'Arts'];

    let cat = new Map<string, boolean>();

    categories.map((category) => (cat.set(category, false)));
   


    const [state, setState] = React.useState({
        all: true,
        language: false,
        antoine: false,
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { all, language, antoine } = state;

    return (
        <div>
             <Container component="div" maxWidth="xl" sx={{pb: 1, mt: 0, bgcolor: 'white', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}} >
             <Box  component="form" noValidate onSubmit={handleSubmit} sx={{flexDirection: 'row', mt: 1 }}>
                        
                       
                        <Grid container  spacing={1} direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={11}>
                                <TextField 
                                id="search" 
                                name="search"
                                fullWidth 
                                label="Search" 
                                variant="outlined" 
                                size="small"
                                sx={{mt:2, mb: 2}}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: '#349AC2'}}  
                                >
                                    <SearchOutlinedIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

             </Container>
       
        <Container  maxWidth="xl" sx={{mt: 5,}} >
        <Grid xs={12}>
             <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={5} 
                    >
            <Grid item xs={3} sx={{mb:2}}>
                
                
                <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                       backgroundColor: 'white', 
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       marginTop: 3,
                       alignItems: 'flex-start', paddingBottom: 2}}>
                    
                    

                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', 
                        mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{mb:0}} >
                                Category
                            </Typography>
                        </Container>
                        

      <FormControl sx={{ ml: 3, mt: 2, mb:2 }} component="fieldset" variant="standard">
        
        <FormGroup>

        {Array.from(cat.keys()).map((category) => (
            <FormControlLabel
            control={
              <Checkbox key={category} checked={cat.get(category)} 
              onChange={handleChange} name={category} />
            }
            label={category}
          /> ))}

        </FormGroup>
      </FormControl>
      
      </div>
      <FilterLevel></FilterLevel>
                                       
                    <FilterOrderBy></FilterOrderBy>
                    <FilterModality></FilterModality>
                    <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                       backgroundColor: 'white',
                       flexDirection: 'row',
                       borderBottomRightRadius: '5px',
                       borderBottomLeftRadius: '5px',
                       display: 'flex',
                       marginTop: 0,
                       alignItems: 'flex-end', paddingBottom: 2}}>
                    
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ml:2, mt: 1, mb: 1, bgcolor: '#349AC2' }}
                        >
                            Filter
                        </Button>
                    </div>

        
            </Grid>
                <Grid item xs={9} sx={{alignContent:'center', justifyItems: 'center', flexDirection: 'column'}}>
                    
                    <Grid container
                    direction="row"
                    alignItems="stretch"
                    spacing={2} >
                    
                    <Grid item xs={4} >
                    <ContractCard name="agustin" surname= "gomez" subject="matematica" rating="4" price="200"
                    description="yo enseño re bien" studies="itba" location="recoleta" modality="remote"
                    /> </Grid>
                    
                    <Grid item xs={4} >
                    <ContractCard name="agustin" surname= "gomez" subject="matematica" rating="4" price="200"
                    description="yo enseño re bien"
                    /> </Grid>
                    <Grid item xs={4} >
                    <ContractCard name="agustin" surname= "gomez" subject="matematica" rating="4" price="200"
                    description="yo enseño re bien"
                    /> </Grid>
                     <Grid item xs={4} >
                    <ContractCard name="agustin" subject="matematica" rating="4" price="200"
                    description="yo enseño re bien"
                    /> </Grid> <Grid item xs={4} >
                    <ContractCard name="agustin" subject="matematica" rating="4" price="200"
                    description="yo enseño re bien"
                    /> </Grid> <Grid item xs={4} >
                    <ContractCard name="agustin" subject="matematica" rating="4" price="200"
                    description="yo enseño re bien"
                    /> </Grid> <Grid item xs={4} >
                    <ContractCard name="agustin" subject="matematica" rating="4" price="200"
                    description="yo enseño re bien"
                    /> </Grid>
                    
                    </Grid>

                    


                    <Pagination count={10} color="primary" sx={{mt:2}}/>


                </Grid>



            </Grid>
        </Grid>
       
        
        </Container>
        </div>
    );
}