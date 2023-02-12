import * as React from 'react';
import FilterLevel from '../components/filter/FilterLevel';

import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Button, CardActions, CardHeader } from '@mui/material';
import '../App.css'
import FilterCategory from '../components/filter/FilterCategory';
import {useEffect, useState} from "react";
import {getContractsByFilter} from "../Services/ContractService";
import {ContractCardInterface} from "../Models/Contract";
import DisplaySubject from '../components/DisplaySubject';
import {useSearchParams} from "react-router-dom";
import {apiGetSubjects} from "../Services/SubjectService";
import {Subject} from "../Models/Subject";
import {getUserId} from "../Services/AuthHelper";



export default function Subjects() {
    const [subjects, setSubjects] = useState<Subject []>([])

    const [categories, setCategories] = useState<string []>([]);
    const [levels, setLevels] = useState<string []>([]);
    const [queryParams] = useSearchParams();
    const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // //let authenticationData;
        // console.log(data.get('search') as string);
    }

    const fetchSubjects = async () =>{
        let subj = await apiGetSubjects(getUserId(), 1, false, categories, levels)
        setSubjects(subj)
    }
    useEffect(() => {
        //@ts-ignore
        for (const entry of queryParams.entries()) {
            const [param, value] = entry;
            if (param == "levels") {
                !levels.includes(value) && levels.push(value)
            }
            if (param == "categories") {
                !categories.includes(value) && categories.push(value)
            }
        }
        fetchSubjects()
    },[])

    const handleCategory = (cat : any) => {
        setCategories(cat)
    }

    const handleLevel = (lev : any) => {
        setLevels(lev)
    }



    return (
        <div>
            <Container component="div" maxWidth="xl" sx={{ pb: 1, mt: 0, bgcolor: 'white', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }} >
                <Box component="form" noValidate onSubmit={handleSearchSubmit} sx={{ flexDirection: 'row', mt: 1 }}>
                    <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={11}>
                            <TextField
                                id="search"
                                name="search"
                                fullWidth
                                label="Search"
                                variant="outlined"
                                size="small"
                                sx={{ mt: 2, mb: 2 }}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: '#349AC2' }}
                            >
                                <SearchOutlinedIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </Container>

            <Container maxWidth="xl" sx={{ mt: 5, }} >
                <Grid xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={6}
                    >
                        <Grid item xs={3} sx={{ mb: 2 }}>


                            <div style={{
                                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                flexDirection: 'column',
                                display: 'flex',
                                marginTop: 3,
                                alignItems: 'flex-start', paddingBottom: 2
                            }}>



                                <Container component="div" sx={{
                                    alignContent: 'center', p: '0.75rem 1.25rem',
                                    mb: 0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)'
                                }}>
                                    <Typography variant="h6" gutterBottom component="div" sx={{ mb: 0 }} >
                                        Filters
                                    </Typography>
                                </Container>
                                <Grid container sx={{ display: 'flex', flexDirection: 'column', mr: 4, m:2,}}>
                                    <Grid item sx={{pr: 7}}> <FilterCategory initialCategory={categories} childToParent={handleCategory}/> </Grid>
                                    <Grid item sx={{pr: 7}}> <FilterLevel initialLevel={levels} childToParent={handleLevel}/> </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={fetchSubjects}
                                    sx={{ mr: 8, mt: 1, mb: 1, bgcolor: '#349AC2', alignSelf: 'flex-end'}}
                                >
                                    Filter
                                </Button>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                    <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                       backgroundColor: 'white', 
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       alignItems: 'flex-start', paddingBottom: 2}}>
                    

                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Typography variant="h5" gutterBottom component="div" sx={{mb:0}} >
                                 Subjects
                            </Typography>
                        </Container>
                        <List sx={{pb:2, pl:2, pr:2, width: '100%', bgcolor: 'background.paper' }}>
                            {subjects.length > 0 && subjects?.map((subject:any) => (
                                <div>
                                    <DisplaySubject subject={subject} title={subject.name} description={subject.category}/>
                                    <Divider variant="inset" component="li" sx={{ml:0}} />
                                </div>
                            ))
                            }
                        </List>
                        

                                       
                    </div>
                </Grid>



                    </Grid>
                </Grid>


            </Container>
        </div>
    );
}