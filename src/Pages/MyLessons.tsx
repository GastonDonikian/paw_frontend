import Container from "@mui/material/Container";
import List from "@mui/material/List";
import {Button, Typography} from "@mui/material";
import DisplayLesson from "../components/DisplayLesson";
import * as React from 'react';
import {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from '@mui/material/styles';
import Rating from "@mui/material/Rating";
import {lightBlue, lightGreen, red} from '@mui/material/colors';
import {ButtonProps} from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {LessonInterface} from "../Models/Lesson";
import {apiChangeLesson, apiGetLessons, apiRequestLesson} from "../Services/LessonService";
import {getUserId} from "../Services/AuthHelper";
import {getIdFromUrl} from "../Services/ContractService";
import {apiPostReview} from "../Services/ReviewService"
import {useNavigate} from "react-router-dom";
import {setIn} from "formik";
import NothingHere from "../components/nothingHere";


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const BlueButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: lightBlue[600],
    borderColor: lightBlue[600],
    '&:hover': {
        color: theme.palette.getContrastText(lightBlue[800]),
        backgroundColor: lightBlue[800],
        borderColor: lightBlue[800],
    },
}));

const RedButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: red[600],
    borderColor: red[600],
    '&:hover': {
        color: theme.palette.getContrastText(red[800]),
        backgroundColor: red[800],
        borderColor: red[800],
    },
}));
const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: lightGreen[700],
    borderColor: lightGreen[700],
    '&:hover': {
        color: theme.palette.getContrastText(lightGreen[800]),
        backgroundColor: lightGreen[800],
        borderColor: lightGreen[800],
    },
}));

export default function MyLessons() {
    const [openRate, setOpenRate] = React.useState(false);
    const [lessons, setLessons] = useState<LessonInterface []>([]);
    const [pendingApprovalLessons, setPendingApprovalLessons] = useState<LessonInterface []>([]);
    const [inProgressLessons, setInProgressLessons] = useState<LessonInterface []>([]);
    const [cancelledLessons, setCancelledLessons] = useState<LessonInterface []>([]);
    const [finishedLessons, setFinishedLessons] = useState<LessonInterface []>([]);
    const [rating, setRating] = React.useState<number>(0);
    const [message, setMessage] = useState<string>('')
    const [value, setValue] = React.useState(0);
    const [currentId, setCurrentId] = useState(-1);
    let isProfessor = false
    let navigate = useNavigate();

    useEffect(() => {
        getLessons()

    },[])

    const cancelLesson = async() => {
        await apiChangeLesson(currentId,"CANCELLED",undefined,undefined)
        let lesson : LessonInterface | undefined = lessons.filter(c => parseInt(getIdFromUrl(c.url)) === currentId).at(0)
        if(lesson === undefined)
            return;
        // @ts-ignore
        setCancelledLessons(cancelledLessons => [...cancelledLessons, lesson])
        setInProgressLessons(inProgressLessons => inProgressLessons?.filter(c => parseInt(getIdFromUrl(c.url)) !== currentId))
        setPendingApprovalLessons(pendingApprovalLessons => pendingApprovalLessons?.filter(c => parseInt(getIdFromUrl(c.url)) !== currentId))
    }
    //TODO: UPDATE LESSONS REAL TIME FROM STATE TO STATE
    const requestReOpenLesson = async (lesson: LessonInterface) => {
        await apiChangeLesson(parseInt(getIdFromUrl(lesson.url)),"PENDING_APPROVAL",undefined,undefined)

        setPendingApprovalLessons(pendingApprovalLessons => [...pendingApprovalLessons,lesson])
        // setFinishedLessons(finishedLessons => finishedLessons?.filter(c => getIdFromUrl(c.url) !== getIdFromUrl(lesson.url)))
        // setCancelledLessons(cancelledLessons => cancelledLessons?.filter(c => getIdFromUrl(c.url) !== getIdFromUrl(lesson.url)))
    }

    const getLessons = async () => {
        let less : LessonInterface[];
        if(isProfessor) {
            less = await apiGetLessons(getUserId(),undefined,undefined,undefined,undefined)
        } else {
            less = await apiGetLessons(undefined,getUserId(),undefined,undefined,undefined)
        }
        setLessons(less)
        setPendingApprovalLessons(less?.filter(c => c.lessonStatus === "PENDING_APPROVAL"))
        setInProgressLessons(less?.filter(c => c.lessonStatus === "IN_PROCESS"))
        setCancelledLessons(less?.filter(c => c.lessonStatus === "CANCELLED"))
        setFinishedLessons(less?.filter(c => c.lessonStatus === "FINISHED"))
    }

  const handleClickOpenRate = (lessonUrl: string) => {
        setCurrentId(parseInt(getIdFromUrl(lessonUrl)))
      setOpenRate(true);
  };

  const handleCloseRate = () => {
    setOpenRate(false);
  };

  const handleChangeMessage = (event : any) => {
      setMessage(event.target.value);
  };

    const handleCloseRateSuccess = async () => {
        await apiPostReview(currentId,message,rating)
        setOpenRate(false);
    };


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const [open, setOpen] = React.useState(false);


    const handleClickOpen = (lessonUrl: string) => {
        setCurrentId(parseInt(getIdFromUrl(lessonUrl)))
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    


    return (

        <Container component="main" maxWidth="md" sx={{
            marginTop: 5,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'white',
            paddingTop: 2,
            paddingLeft: 3,
            paddingRight: 3,
            paddingBottom: 3,
            borderRadius: '5px',
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
        }}>
            <Typography component="h1" variant="h5">
                MY LESSONS
            </Typography>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                <Tab label={"Requests (" + (pendingApprovalLessons ? pendingApprovalLessons.length : 0) + ")"}{...a11yProps(0)} />
                <Tab label={"In Progress (" + (inProgressLessons ? inProgressLessons.length : 0) + ")"} {...a11yProps(1)} />
                <Tab label={"Finished (" + (finishedLessons ? finishedLessons.length : 0) + ")"} {...a11yProps(2)} />
                <Tab label={"Cancelled (" + (cancelledLessons ? cancelledLessons.length : 0) + ")"} {...a11yProps(3)} />
            </Tabs>

            {//requests
            value === 0 && (
                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                    {pendingApprovalLessons && pendingApprovalLessons.map(selectedLesson =>
                        <DisplayLesson lesson={selectedLesson} isProfessor={isProfessor}>
                            <RedButton variant="outlined"  onClick={() => handleClickOpen(selectedLesson.url)} sx={{ mt: 1, ml: 2, }}>Cancel request</RedButton>
                        </DisplayLesson>)}
                    {(!pendingApprovalLessons || pendingApprovalLessons.length === 0) && <NothingHere/>}
                </List>
            )}

            {//in progress
            value === 1 && (
                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                    {inProgressLessons && inProgressLessons.map(selectedLesson =>
                        <DisplayLesson lesson={selectedLesson} isProfessor={isProfessor}>
                            <RedButton variant="outlined"  onClick={() => handleClickOpen(selectedLesson.url)} sx={{ mt: 1, ml: 2, }}>Cancel lesson</RedButton>
                            <GreenButton variant="outlined" onClick={() => navigate("/class")}sx={{ mt: 1, ml: 2, }}>Go to class</GreenButton>
                        </DisplayLesson>)}
                    {(!inProgressLessons || inProgressLessons.length === 0) && <NothingHere/>}
                </List>
            )}
            {//finished
            value === 2 && (
                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                    {finishedLessons && finishedLessons.map(selectedLesson =>
                        <DisplayLesson lesson={selectedLesson} isProfessor={isProfessor}>
                            <BlueButton variant="outlined" onClick={() => {handleClickOpenRate(selectedLesson.url)}} sx={{ mt: 1, ml: 2, }}>Rate</BlueButton>
                            <GreenButton variant="outlined" onClick={() => {requestReOpenLesson(selectedLesson)}} sx={{ mt: 1, ml: 2, }}>Request new lesson</GreenButton>
                        </DisplayLesson>)}
                    {(!finishedLessons || finishedLessons.length === 0) && <NothingHere/>}
                </List>
            )}

<Dialog open={openRate} onClose={handleCloseRate}>
        <DialogTitle>Rate lesson</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Rating:
          </DialogContentText>
          <Rating
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating? newRating: 0);
        }}
      />
      <TextField
          id="outlined-textarea"
          placeholder="Review"
          multiline
          fullWidth
          value={message}
          onChange={handleChangeMessage}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRate}>Close</Button>
          <Button onClick={() => {handleCloseRateSuccess()}}>Rate</Button>
        </DialogActions>
      </Dialog>


            { // cancelled
            value === 3 && (
                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                    {cancelledLessons && cancelledLessons.map(selectedLesson =>
                    <DisplayLesson lesson={selectedLesson} isProfessor={isProfessor}>
                        <GreenButton variant="outlined" onClick={() => {requestReOpenLesson(selectedLesson)}} sx={{ mt: 1, ml: 2, }}>Request new lesson</GreenButton>
                    </DisplayLesson>)}
                    {(!cancelledLessons || cancelledLessons.length === 0) && <NothingHere/>}
                </List>
            )}




<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to cancel this lesson?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is permanent, and to undo it you will have to request another lesson.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>no</Button>
          <Button onClick={() => {handleClose(); cancelLesson()}} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
        </Container>
    );
}