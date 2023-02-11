import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Button, CardActions, CardHeader, CircularProgress} from '@mui/material';
import '../../App.css'
import DisplayListItem from '../../components/DisplayListItem';
import { padding } from '@mui/system';
import {useEffect, useState} from "react";
import {ProfessorModel} from "../../Models/Users/User";
import {getUserFromToken, getUserId, isAuthenticated, isVerified} from "../../Services/AuthHelper";
import * as React from "react";
import {Subject} from "../../Models/Subject";
import {useNavigate} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DisplayReview from '../../components/DisplayReview';
import Box from '@mui/material/Box';
import {apiGetSubjects} from "../../Services/SubjectService";
import {getContractsForProfessor} from "../../Services/ContractService";
import contractCard from "../../components/ContractCard";
import {ContractCardInterface} from "../../Models/Contract";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function ProfessorProfile() {
    const [tab1, setTab] = useState(true);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    let navigate = useNavigate()
    const [user, setUser] = useState<ProfessorModel>();
    const [contracts, setContracts] = useState<ContractCardInterface []>();
    const [selectedContract, setSelectedContracts] = useState<ContractCardInterface>()

    const loadUser = async () => {
        setUser(await getUserFromToken());
    }

    const loadContracts = async () => {
        setContracts(await getContractsForProfessor(getUserId()))
        console.log(contracts)
    }

    const selectContract = async (contract: ContractCardInterface) => {
        setSelectedContracts(contract)
    }

    useEffect( () => {
        loadUser();
        loadContracts();
        },
        [])

    return (
        <div>
             <Container component="div" maxWidth="xl" sx={{ pt: 1, pb: 1, mt: 0, bgcolor: 'white', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}} >
             <Grid
                    container
                    direction="row"
                    spacing={2} 
                    >
                        <Grid item xs={1}  >
                            <img src="./profilePhoto.jpeg" height={80} />
                        </Grid>
                        <Grid item >
                        <Typography gutterBottom variant="h5" component="div" sx={{mb:0}}>
                            {user ? (user.name + ' ' + user.surname) : <CircularProgress/> }
                        </Typography>
                        <Typography gutterBottom component="p" sx={{mb:0}}>
                            {user ? (user.email) : <CircularProgress/> }
                        </Typography>
                        <Rating name="read-only" value={3} readOnly />
                        </Grid>
                    </Grid>
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
            <Grid item xs={4}>
                
                <Container sx={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', mb:5, bgcolor: 'white', flexDirection: 'column', borderRadius: '5px', p:2, display: 'flex', alignItems: 'flex-start'}}>
                    <Typography gutterBottom variant="h6" component="div" sx={{mb:0}}>
                            About {user ? (user.name + ' ' + user.surname) : <CircularProgress/> }
                        </Typography>
                   <Typography>{user ? (user.description) : <CircularProgress/> }</Typography>
                </Container>
                <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                       backgroundColor: 'white', 
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       marginTop: 3,
                       alignItems: 'flex-start', paddingBottom: 2}}>
                    

                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Typography variant="h5" gutterBottom component="div" sx={{mb:0}} >
                                Subjects {contracts?.length}
                            </Typography>
                        </Container>
                        <List sx={{pb:2, pl:2, pr:2, width: '100%', bgcolor: 'background.paper' }}>
                        {contracts && (contracts.length > 0 ?contracts.map((contract: ContractCardInterface) => (
                            <Typography onClick={() => setSelectedContracts(contract)}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText primaryTypographyProps={(selectedContract !== undefined && selectedContract.url === contract.url) ? {fontWeight:'bold'} : {fontWeight:'normal'}}
                                        primary= {contract.subject.name}
                                        secondary={contract.subject.category}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" sx={{ml:0}} /></Typography>
                        )) : <CircularProgress/>)}
                        </List>
                    </div>
            
            </Grid>
                <Grid item xs={8}>
                    <div style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                       backgroundColor: 'white', 
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       alignItems: 'flex-start', paddingBottom: 2}}>
                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Information" {...a11yProps(0)} onClick={() => setTab(s => !s)} />
                                        <Tab label="Reviews" {...a11yProps(1)} onClick={() => setTab(s => !s)} />
                            </Tabs>
                        </Container>
                        {tab1 ?  
                                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                                    {selectedContract ?
                                        <div>
                                            <DisplayListItem title="Subject" description={selectedContract.subject.name} />
                                            <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                            <DisplayListItem title="Studies" description={selectedContract.summaryProfessor.studies} />
                                            <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                            <DisplayListItem title="Description" description={selectedContract.description} />
                                            <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                            <DisplayListItem title="Phone" description={selectedContract.summaryProfessor.phoneNumber} />
                                            <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                            <DisplayListItem title="Price" description={selectedContract.price} />
                                            <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                            <DisplayListItem title="Modality" description={selectedContract.local + ' ' + selectedContract.remote} />
                                            <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                        </div>:
                                    <div><DisplayListItem title="Mail" description="desc" />
                                        <Divider variant="inset" component="li" sx={{ ml: 0 }} /></div>}
                                </List> : null}
                                {!tab1 ?  
                                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                                    <DisplayReview name="Alejandro" surname="jimenex" review="la clase ta buena" rating="4" date="12-03-21" />
                                    
                                </List> : null}
                    </div>
                </Grid>

            </Grid>
        </Grid>
       
        
        </Container>
        </div>
    );
}