import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {CardActionArea, Grid, Button, CardActions, CircularProgress} from '@mui/material';
import '../../App.css';
import { Container } from '@mui/system';
import { Category } from '../../Models/Category';
import {getCategories} from "../../Services/EnumService";




export default function SearchHome() {
    // const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const load = async () => {
        setCategories(await getCategories())
    }
    useEffect( () => {load()},
        [])
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //let authenticationData;
        console.log(data.get('search') as string);
    }

    return (
        <Container  maxWidth="md" sx={{background: 'white', flexDirection: 'column',
        alignItems: 'center', borderRadius: '5px', textAlign:'center', pt:2, pb:2}}>
            <Container sx={{ flexDirection: 'column', textAlign:'center', alignItems: 'center',display: 'flex'}}>
                <Avatar sx={{ m: 1, bgcolor: '#349AC2', alignItems: 'center'}}>
                    <SearchOutlinedIcon/>
                </Avatar>
                    <Typography gutterBottom variant="h5" component="div">
                        Find specific professors for what you need
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Find what subject you wanna learn
                    </Typography>
            </Container>
                
            
                    <Box  component="form" noValidate onSubmit={handleSubmit} sx={{flexDirection: 'row', mt: 1 }}>
                        
                       
                        <Grid container  spacing={1} direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={8}>
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

                    <Container sx={{ flexDirection: 'row', textAlign:'center', alignItems: 'center', alignContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                        {categories.length > 0 ?categories.map((category: any) => (
                            <Button
                                key={category}
                                disableFocusRipple
                                sx={{ mr: 1, color: 'white', display: 'block', bgcolor: '#349AC2'}}
                            >
                                {category.category}
                            </Button>
                        )) : <CircularProgress/>}
                    </Container>
        </Container>
    );
}