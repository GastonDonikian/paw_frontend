import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions, CardHeader, CircularProgress} from '@mui/material';
import '../App.css'
import * as React from "react";
import {useNavigate} from "react-router-dom";
import DisplayMySubject from '../components/DisplayMySubject';
import {useEffect, useState} from "react";
import {apiGetSubjects} from "../Services/SubjectService";
import {getUserId} from "../Services/AuthHelper";
import {
    activateContract, apiActivateContract,
    apiDeleteContract,
    apiGetContractsByStatus, apiPauseContract,
    getIdFromUrl,
    pauseContract
} from "../Services/ContractService";
import {Contract} from "../Models/Contract";



export default function MySubjects() {
    const [activeContracts,setActiveContracts] = useState<Contract[]>([])
    const [onHoldContracts,setOnHoldContracts] = useState<Contract[]>([])

    const loadContracts = async () => {
        setActiveContracts(await apiGetContractsByStatus('ACTIVE'));
        setActiveContracts(await apiGetContractsByStatus('PAUSED'));
    }

    const sendActive = async (contract: Contract) => {
        setActiveContracts(currentContracts => [...currentContracts,contract])
        setOnHoldContracts(currentContracts => currentContracts.filter(c => getIdFromUrl(c.url) != getIdFromUrl(contract.url)))
        await apiActivateContract(contract.url)
    }

    const deleteContract = async (contract: Contract) => {
        setActiveContracts(currentContracts => currentContracts.filter(c => getIdFromUrl(c.url) != getIdFromUrl(contract.url)))
        setOnHoldContracts(currentContracts => currentContracts.filter(c => getIdFromUrl(c.url) != getIdFromUrl(contract.url)))
        await apiDeleteContract(contract.url)
    }

    const sendOnHold = async (contract: Contract) => {
        setActiveContracts(currentContracts => currentContracts.filter(c => getIdFromUrl(c.url) != getIdFromUrl(contract.url)))
        setOnHoldContracts(currentContracts => [...currentContracts,contract])
        await apiPauseContract(contract.url)
    }

    useEffect(() => {
        loadContracts()
    },[])

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
            <Grid item xs={6}>
            <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                       backgroundColor: 'white',
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       alignItems: 'flex-start', paddingBottom: 2}}>
                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Grid justifyContent="space-between" direction="row" sx={{display: 'flex'}}>
                               <Grid item><Typography variant="h5" gutterBottom component="div" sx={{mb:0}} >
                                Subjects
                            </Typography></Grid> <Grid item>
                            <Button>Add Subject</Button></Grid></Grid>
                        </Container>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {activeContracts.length > 0 && activeContracts.map( (contract:any) => (
                                <div><DisplayMySubject title={contract.title} description={contract.description} contract={contract}
                                                       changeStatus={sendOnHold} delete={deleteContract}
                                                  active={true}
                                />
                                    <Divider variant="inset" component="li" sx={{ ml: 0 }} /></div>
                            ))}

                            <Divider variant="inset" component="li" sx={{ml:0}} />
                        </List>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                       backgroundColor: 'white',
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       alignItems: 'flex-start', paddingBottom: 2}}>
                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Typography variant="h5" gutterBottom component="div" sx={{mb:0}} >
                                Subjects on hold 
                            </Typography>
                        </Container>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {onHoldContracts.length > 0 && onHoldContracts.map( (contract:any) => (
                                <div><DisplayMySubject title={contract.title} description={contract.description}
                                                       changeStatus={sendActive} delete={deleteContract} contract={contract}
                                                       active={false}/>
                                    <Divider variant="inset" component="li" sx={{ ml: 0 }} /></div>
                            ))}
                        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                        </List>
                    </div>
                </Grid>

            </Grid>
        </Grid>
        </Container>
    );
}