import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {Button, CircularProgress, Grid} from '@mui/material';
import '../../App.css'
import DisplayListItem from '../../components/DisplayListItem';
import * as React from "react";
import {useEffect, useState} from "react";
import {ProfessorModel} from "../../Models/Users/User";
import {getUserById, getUserFromToken, getUserId} from "../../Services/AuthHelper";
import {useNavigate, useParams} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DisplayReview from '../../components/DisplayReview';
import {getContractsForProfessor} from "../../Services/ContractService";
import {ContractCardInterface} from "../../Models/Contract";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {apiRequestLesson} from "../../Services/LessonService";
import {Review} from "../../Models/Review";
import {apiGetReviews} from "../../Services/ReviewService";
import NothingHere from "../../components/nothingHere";
import {intl} from "../../i18n/i18n";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function ProfessorProfile() {
    let navigate = useNavigate()
    let {id} = useParams();
    const [tab1, setTab] = useState(true);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };



    const [user, setUser] = useState<ProfessorModel>();
    const [contracts, setContracts] = useState<ContractCardInterface []>();
    const [selectedContract, setSelectedContracts] = useState<ContractCardInterface>();
    const [selectedReviews, setSelectedReviews] = useState<Review []>();
    const [isCurrentProfile,setIsCurrentProfile] = useState<Boolean>(false);
    const [reviews, setReviews] = useState<Review []>();
    const loadUser = async () => {
        if(!id)
            setUser(await getUserFromToken());
        else {
            let profId = id ? parseInt(id) : -1
            let us = await getUserById(profId)
            setUser(us);
        }
    }



    const createContract = async (selectedContract : ContractCardInterface) => {
        try {
            await apiRequestLesson(parseInt(getIdFromUrl(selectedContract?.url)));
            navigate("/myLessons")
        } catch(error: any) {
            if (error.response) {
                if (error.response.status === 409) {
                    //TODO FIX FOR A NICE POPUP
                    alert("Class already exists!")
                }
            }
        }
    }
    const loadContracts = async () => {
        let profId = id ? parseInt(id) : -1
        let cont = await getContractsForProfessor(profId);
        setContracts(cont)
    }

    const loadReviews = async () => {
        let profId = id ? parseInt(id) : -1
        let rev = await apiGetReviews(undefined,undefined,profId,undefined)
        setReviews(rev)
    }

    function getIdFromUrl(url: String){
        const splitUrl = url.split('/');
        return splitUrl[4]
    }

    const selectContract = (contract: ContractCardInterface) => {
        setSelectedContracts(contract)
        let selectedRev = reviews?.filter(c => (getIdFromUrl(c.subjectUrl) === getIdFromUrl(contract.subject.url)))
        setSelectedReviews(selectedRev)
    }

    useEffect( () => {
        loadUser();
        setIsCurrentProfile(!id || (parseInt(id) === getUserId()))
        loadContracts();
        loadReviews()
        },
        [])

    // @ts-ignore
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
                            {user ? <Rating name="read-only" value={user?.rating} readOnly /> : <CircularProgress/>}
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
                        {intl.formatMessage({ id: 'about' })} {user ? (user.name + ' ' + user.surname) : <CircularProgress/> }
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
                                {intl.formatMessage({ id: 'subjects' })} {contracts?.length}
                            </Typography>
                        </Container>
                        <List sx={{pb:2, pl:2, pr:2, width: '100%', bgcolor: 'background.paper' }}>
                        {contracts && (contracts.length > 0 ?contracts.map((contract: ContractCardInterface) => (
                            <Typography onClick={() => selectContract(contract)}>
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
                                        <Tab label="Information" {...a11yProps(0)} onClick={() =>  {if(!tab1) {setTab(s => !s)} }} />
                                        <Tab label="Reviews" {...a11yProps(1)} onClick={() =>  {if(tab1) {setTab(s => !s)} }}/>
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
                                            {!isCurrentProfile && <Button variant="contained" onClick={() => {createContract(selectedContract)}
                                            }>{intl.formatMessage({ id: 'request_lesson' })}</Button>}
                                        </div>:
                                    <div>
                                        <DisplayListItem title="Mail" description={user?.email} />
                                        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                        <DisplayListItem title="Studies" description={user?.studies} />
                                        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                        <DisplayListItem title="Phone" description={user?.phoneNumber} />
                                        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                                    </div>}
                                </List> : null}
                                {!tab1 ?  
                                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                                    {selectedContract ? (selectedReviews && selectedReviews.length > 0 ?
                                        selectedReviews.map((review: Review) => (
                                            <DisplayReview name={review.author} review={review.message} rating={review.rating} date={review.date} />
                                        )) : <NothingHere/>)
                                     : (reviews ?
                                        reviews.map((review: Review) => (
                                            <DisplayReview name={review.author} review={review.message} rating={review.rating} date={review.date} />
                                        )) : <NothingHere/>)
                                    }
                                 </List> : null}
                        <Container>
                            {isCurrentProfile && <Button variant="contained" onClick={() => {
                            navigate('/editProfessorProfile')}
                            }>{intl.formatMessage({ id: 'edit_profile' })}</Button>}
                        </Container>
                    </div>
                </Grid>

            </Grid>
        </Grid>
       
        
        </Container>
        </div>
    );
}