import * as React from 'react';
import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Typography from '@mui/material/Typography';
import {Button, CircularProgress, Grid} from '@mui/material';
import '../../App.css';
import {Container} from '@mui/system';
import {getCategories} from "../../Services/EnumService";
import {useNavigate} from "react-router-dom";
import {intl} from "../../i18n/i18n";


export default function SearchHome() {
    // const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()
    const load = async () => {
        setCategories(await getCategories())
    }
    useEffect( () => {load()},
        [])
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        navigate("/professors?search=" + data.get('search') as string)
    }

    return (
        <Container  maxWidth="md" sx={{background: 'white', flexDirection: 'column',
        alignItems: 'center', borderRadius: '5px', textAlign:'center', pt:2, pb:2}}>
            <Container sx={{ flexDirection: 'column', textAlign:'center', alignItems: 'center',display: 'flex'}}>
                <Avatar sx={{ m: 1, bgcolor: '#349AC2', alignItems: 'center'}}>
                    <SearchOutlinedIcon/>
                </Avatar>
                    <Typography gutterBottom variant="h5" component="div">
                        {intl.formatMessage({ id: 'find_professor' })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {intl.formatMessage({ id: 'find_subject' })}
                    </Typography>
            </Container>
                
            
                    <Box  component="form" noValidate onSubmit={handleSubmit} sx={{flexDirection: 'row', mt: 1 }}>
                        
                       
                        <Grid container  spacing={1} direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={8}>
                                <TextField 
                                id="search" 
                                name="search"
                                fullWidth 
                                label={intl.formatMessage({ id: 'search' })}
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

                    <Container sx={{ flexDirection: 'row', textAlign:'center', alignItems: 'center', justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                        {categories.length > 0 ?categories.map((category: any) => (
                            <Button
                                key={category.category}
                                onClick={() => {
                                    navigate("/professors?categories=" + category.category)
                                }}
                                disableFocusRipple
                                sx={{ mr: 1, color: 'white', display: 'block', bgcolor: '#349AC2',
                                '&:hover': {
                                    backgroundColor: '#349AC2',
                                } }}
                            >
                                {category.category}
                            </Button>
                        )) : <CircularProgress/>}
                    </Container>
        </Container>
    );
}