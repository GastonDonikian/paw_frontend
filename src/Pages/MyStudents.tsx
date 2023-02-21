import Container from "@mui/material/Container";
import * as React from 'react';
import { List } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from "@mui/material/Button";
import DisplayLesson from "../components/DisplayLesson";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Rating from "@mui/material/Rating";
import { styled } from '@mui/material/styles';
import { red, lightGreen, lightBlue } from '@mui/material/colors';
import { ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {LessonInterface} from "../Models/Lesson";
import {apiGetLessons} from "../Services/LessonService";
import {getUserId} from "../Services/AuthHelper";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import NothingHere from "../components/nothingHere";
import {getIdFromUrl} from "../Services/ContractService";

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyStudents() {
    const [value, setValue] = React.useState(0);
    const [lessons, setLessons] = useState<LessonInterface []>([]);
    const [pendingApprovalLessons, setPendingApprovalLessons] = useState<LessonInterface []>([]);
    const [inProgressLessons, setInProgressLessons] = useState<LessonInterface []>([]);
    const [cancelledLessons, setCancelledLessons] = useState<LessonInterface []>([]);
    const [finishedLessons, setFinishedLessons] = useState<LessonInterface []>([]);
    let navigate = useNavigate();
    const [currentId, setCurrentId] = useState(-1);
    let isProfessor =true;
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    useEffect(() => {
        getStudents()

    },[])
    const getStudents = async () => {
        let less : LessonInterface[];
        less = await apiGetLessons(getUserId(),undefined,undefined,undefined,undefined)
        setLessons(less)
        setPendingApprovalLessons(less?.filter(c => c.lessonStatus === "PENDING_APPROVAL"))
        setInProgressLessons(less?.filter(c => c.lessonStatus === "IN_PROCESS"))
        setCancelledLessons(less?.filter(c => c.lessonStatus === "CANCELLED"))
        setFinishedLessons(less?.filter(c => c.lessonStatus === "FINISHED"))
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (lessonUrl: string) => {
        setCurrentId(parseInt(getIdFromUrl(lessonUrl)))
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const [openReject, setOpenReject] = React.useState(false);

    const handleClickOpenReject = (lessonUrl: string) => {
        setCurrentId(parseInt(getIdFromUrl(lessonUrl)))

      setOpenReject(true);
    };
  
    const handleCloseReject = () => {
      setOpenReject(false);
    };



    const [openFinish, setOpenFinish] = React.useState(false);

    const handleClickOpenFinish = (lessonUrl: string) => {
        setCurrentId(parseInt(getIdFromUrl(lessonUrl)))
      setOpenFinish(true);
    };
  
    const handleCloseFinish = () => {
      setOpenFinish(false);
    };
  

    return (

<Container component="div" maxWidth="md" sx={{
            marginTop: 5,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'white',
            paddingTop: 2,
            paddingBottom: 3,
            borderRadius: '5px',
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
        }}>
             <Typography component="h1" variant="h5">
                        MY STUDENTS
                    </Typography>
           
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">

            <Tab label={"Requests (" + (pendingApprovalLessons ? pendingApprovalLessons.length : 0) + ")"}{...a11yProps(0)} />
            <Tab label={"In Progress (" + (inProgressLessons ? inProgressLessons.length : 0) + ")"} {...a11yProps(1)} />
            <Tab label={"Finished (" + (finishedLessons ? finishedLessons.length : 0) + ")"} {...a11yProps(2)} />
            <Tab label={"Cancelled (" + (cancelledLessons ? cancelledLessons.length : 0) + ")"} {...a11yProps(3)} />
        </Tabs>
        
            {//requests
            value === 0 && (
              <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                  {inProgressLessons && inProgressLessons.map(selectedLesson =>
                      <DisplayLesson lesson={selectedLesson} isProfessor={isProfessor}>
                          <RedButton variant="outlined"  onClick={() => handleClickOpenReject(selectedLesson.url)} sx={{ mt: 1, ml: 2, }}>Reject Student</RedButton>
                          <GreenButton variant="outlined" onClick={() => navigate("/class")}sx={{ mt: 1, ml: 2, }}>Accept Student</GreenButton>
                      </DisplayLesson>)}
                  {(!inProgressLessons || inProgressLessons.length === 0) && <NothingHere/>}
              </List>
          )}

          {//in progress
          value === 1 && (
                  <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                      {inProgressLessons && inProgressLessons.map(selectedLesson =>
                          <DisplayLesson lesson={selectedLesson} isProfessor={isProfessor}>
                              <RedButton variant="outlined"  onClick={() => handleClickOpen(selectedLesson.url)} sx={{ mt: 1, ml: 2, }}>Cancel lesson</RedButton>
                              <BlueButton variant="outlined" onClick={() => handleClickOpenFinish(selectedLesson.url)} sx={{ mt: 1, ml: 2, }}>Finish lesson</BlueButton>

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
                              <Typography gutterBottom component="div" sx={{ mb: 0, fontStyle:'italic' }}>
                                  Left a review:
                              </Typography>
                              <Rating name="read-only" value={3} readOnly />
                              <Typography gutterBottom component="div" sx={{ mb: 0 }}>
                                  es muy mala
                              </Typography> </DisplayLesson>)}
                      {(!finishedLessons || finishedLessons.length === 0) && <NothingHere/>}
                  </List>
          )}
          { // cancelled
          value === 3 && (
                  <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>
                      {cancelledLessons && cancelledLessons.map(selectedLesson =>
                          <DisplayLesson lesson={selectedLesson} isProfessor={isProfessor}>
                              <RedButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Delete lesson</RedButton>
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
            This action is permanent, and to undo it the student will have to request another lesson.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>no</Button>
          <Button onClick={handleClose} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>



<Dialog
        open={openReject}
        onClose={handleCloseReject}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to reject this student?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is permanent, and to undo it the student will have to request another lesson.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReject}>no</Button>
          <Button onClick={handleCloseReject} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog
        open={openFinish}
        onClose={handleCloseFinish}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to finish this lesson?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is permanent, but the student can request another lesson.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFinish}>no</Button>
          <Button onClick={handleCloseFinish} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>





   </Container>
      
     
     
    );
}