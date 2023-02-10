import * as React from 'react';

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
import { CardActionArea, Grid, Button, CardActions, CardHeader } from '@mui/material';
import '../App.css'
import DisplayListItem from '../components/DisplayListItem';
import { padding } from '@mui/system';
import ContractCardComponent from '../components/ContractCard';
import FilterModality from '../components/filter/FilterModality';
import FilterCategory from '../components/filter/FilterCategory';
import {useEffect, useState} from "react";
import {getContractsByFilter} from "../Services/ContractService";
import {ContractCardInterface} from "../Models/Contract";
import DisplaySubject from '../components/DisplaySubject';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Files from '../components/class/Files';
import Chat from '../components/class/Chat';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Class() {

    const [tab1, setTab] = useState(true);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

   
    return (
        <div>
        

            <Container maxWidth="xl" sx={{ mt: 5, }} >
                <Grid xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={6}
                    >
                        <Grid item xs={4} sx={{ mb: 2 }}>


                            <div style={{
                                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                flexDirection: 'column',
                                display: 'flex',
                                marginTop: 3,
                                alignItems: 'flex-start', paddingBottom: 2
                            }}>

                                <Typography variant="h4" sx={{p:2}}>Nombre materia</Typography>


                                
                            </div>


                        </Grid>
                        <Grid item xs={8}>
                    <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                       backgroundColor: 'white', 
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       alignItems: 'flex-start', paddingBottom: 2}}>
                    
                    <Container component="div" sx={{alignItems: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Chat" {...a11yProps(0)} onClick={() => setTab(s => !s)} />
                                        <Tab label="Files" {...a11yProps(1)} onClick={() => setTab(s => !s)} />
                            </Tabs>
                        </Container>
                        {tab1 ?  
                                <Chat/> : <Files/>}

                                       
                    </div>
                </Grid>



                    </Grid>
                </Grid>


            </Container>
        </div>
    );
}