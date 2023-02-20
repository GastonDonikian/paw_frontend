import * as React from 'react';
import FilterOrderBy from '../components/filter/FilterOrderBy';
import FilterLevel from '../components/filter/FilterLevel';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import '../App.css'
import ContractCardComponent from '../components/ContractCard';
import FilterModality from '../components/filter/FilterModality';
import FilterCategory from '../components/filter/FilterCategory';
import {useEffect, useState} from "react";
import {getContractsByFilter, getContractsBySearch} from "../Services/ContractService";
import {ContractCardInterface} from "../Models/Contract";
import {useNavigate, useSearchParams} from "react-router-dom";
import {getUserIdFromUrl} from "../Services/UserService";
import NothingHere from '../components/nothingHere';



export default function ProfessorProfile() {
    const [contracts, setContracts] = useState<ContractCardInterface []>()
    let navigate = useNavigate()
    const [categories, setCategories] = useState<string []>([]);
    const [levels, setLevels] = useState<string []>([]);
    const [modality, setModality] = useState<string []>([]);
    const [queryParams] = useSearchParams();
    const [orderBy, setOrderBy] = useState<string>(queryParams.get('orderBy') || '');
    const [search, setSearch] = useState<string>(queryParams.get('search') || '')

    const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let cont = await getContractsBySearch(data.get('search') as string || search)
        setContracts(cont)
    }
    const fetchContracts = async () =>{
        let cont = await getContractsByFilter(categories, levels, undefined, modality, orderBy)
        setContracts(cont)
    }

    const fetchContractsBySearch = async () => {
        let cont = await getContractsBySearch(search)
        setContracts(cont)
    }
    useEffect(() => {
        if(search !== '') {
            fetchContractsBySearch()
            return;
        }

        //@ts-ignore
        for (const entry of queryParams.entries()) {
            const [param, value] = entry;
            if (param == "levels") {
                !levels.includes(value) && levels.push(value)
            }
            if (param == "categories") {
                !categories.includes(value) && categories.push(value)
            }
            if (param == "modality") {
                !modality.includes(value) && modality.push(value)
            }
        }
        fetchContracts()
        console.log(categories)
    },[])

    const handleCategory = (cat : any) => {
        setCategories(cat)
    }

    const handleLevel = (lev : any) => {
        setLevels(lev)
    }
    const handleModality = (mod : any) => {
        setModality(mod)
    }
    const handleOrderBy = (order : any) => {
        setOrderBy(order)
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
                                placeholder={search}
                                InputLabelProps={{ shrink: true }}
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
                        spacing={5}
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
                                    <Grid item sx={{pr: 7}}> <FilterModality initialModality={modality} childToParent={handleModality}/> </Grid>
                                    <Grid item sx={{pr: 7}}> <FilterOrderBy initialOrderBy={orderBy} childToParent={handleOrderBy}/> </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={fetchContracts}
                                    sx={{ mr: 8, mt: 1, mb: 1, bgcolor: '#349AC2', alignSelf: 'flex-end'}}
                                >
                                    Filter
                                </Button>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={9} sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                            <Grid container
                                direction="row"
                                alignItems="stretch"
                                spacing={2} >

                                {!contracts && <NothingHere/>}

                                {contracts && contracts.map(contract =>
                                    <Grid item xs={4} onClick={() => {
                                        navigate('/professorProfile/' + getUserIdFromUrl(contract.summaryProfessor.url))
                                    }}>
                                        <ContractCardComponent contract={contract} on/>
                                    </Grid>)
                                }
                            </Grid>
                        </Grid>



                    </Grid>
                </Grid>


            </Container>
        </div>
    );
}