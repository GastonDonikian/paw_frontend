import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {Button, Grid} from '@mui/material';
import '../App.css'
import * as React from "react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import DisplayMySubject from '../components/DisplayMySubject';
import {
    apiActivateContract,
    apiDeleteContract,
    apiGetContractsByStatus,
    apiPauseContract,
    getIdFromUrl
} from "../Services/ContractService";
import {Contract} from "../Models/Contract";
import NothingHere from "../components/nothingHere";
import {intl} from "../i18n/i18n";


export default function MySubjects() {
    const navigate = useNavigate()
    const [activeContracts,setActiveContracts] = useState<Contract[]>([])
    const [onHoldContracts,setOnHoldContracts] = useState<Contract[]>([])

    const loadContracts = async () => {
        setActiveContracts(await apiGetContractsByStatus('ACTIVE'));
        setOnHoldContracts(await apiGetContractsByStatus('PAUSED'));
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
                            <Button onClick={() => {navigate('/addSubjects')}}>{intl.formatMessage({ id: 'add_subject'})}</Button></Grid></Grid>
                        </Container>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {activeContracts.length > 0 ? activeContracts.map( (contract:any) => (
                                <div><DisplayMySubject title={contract.subject.name} description={contract.description} contract={contract}
                                                       changeStatus={sendOnHold} delete={deleteContract}
                                                  active={true}
                                />
                                    <Divider variant="inset" component="li" sx={{ ml: 0 }} /></div>
                            )) : <NothingHere/>}
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
                                {intl.formatMessage({ id: 'subject_on_hold'})}
                            </Typography>
                        </Container>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {onHoldContracts.length > 0 ? onHoldContracts.map( (contract:any) => (
                                <div><DisplayMySubject title={contract.subject.name} description={contract.description}
                                                       changeStatus={sendActive} delete={deleteContract} contract={contract}
                                                       active={false}/>
                                    <Divider variant="inset" component="li" sx={{ ml: 0 }} /></div>
                            )) : <NothingHere/>}
                        </List>
                    </div>
                </Grid>

            </Grid>
        </Grid>
        </Container>
    );
}