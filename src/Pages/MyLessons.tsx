import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { Typography, Button, Grid } from "@mui/material";
import DisplayLesson from "../components/DisplayLesson";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Rating from "@mui/material/Rating";
import { red, lightGreen, lightBlue } from '@mui/material/colors';
import { ButtonProps } from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




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

  const handleClickOpenRate = () => {
    setOpenRate(true);
  };

  const handleCloseRate = () => {
    setOpenRate(false);
  };

  const [rating, setRating] = React.useState<number | null>(2);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
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

                <Tab label="Requests" {...a11yProps(0)} />
                <Tab label="In Progress" {...a11yProps(1)} />
                <Tab label="Finished" {...a11yProps(2)} />
                <Tab label="Cancelled" {...a11yProps(3)} />
            </Tabs>

            {//requests
            value === 0 && (
                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>

                    <DisplayLesson name="juan" surname="perez" email="email">
                        <RedButton variant="outlined"  onClick={handleClickOpen} sx={{ mt: 1, ml: 2, }}>Cancel request</RedButton>
                    </DisplayLesson>

                    <DisplayLesson name="juan" surname="perez" email="email">
                        <RedButton variant="outlined" onClick={handleClickOpen} sx={{ mt: 1, ml: 2, }}>Cancel request</RedButton>
                    </DisplayLesson>
                </List>
            )}

            {//in progress
            value === 1 && (
                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>

                    <DisplayLesson name="juan" surname="perez" email="email">
                        <RedButton variant="outlined"  onClick={handleClickOpen} sx={{ mt: 1, ml: 2, }}>Cancel lesson</RedButton>
                        <GreenButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Go to class</GreenButton>
                  </DisplayLesson>
                </List>
            )}
            {//finished
            value === 2 && (
                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>

                    <DisplayLesson name="juan" surname="perez" email="email">
                        <BlueButton variant="outlined" onClick={handleClickOpenRate} sx={{ mt: 1, ml: 2, }}>Rate</BlueButton>
                        <GreenButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Request new lesson</GreenButton>
                    </DisplayLesson>
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
          setRating(newRating);
        }}
      />
      <TextField
          id="outlined-textarea"
          placeholder="Review"
          multiline
          fullWidth
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRate}>Close</Button>
          <Button onClick={handleCloseRate}>Rate</Button>
        </DialogActions>
      </Dialog>


            { // cancelled
            value === 3 && (
                <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>

                    <DisplayLesson name="juan" surname="perez" email="email">
                        <GreenButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Request new lesson</GreenButton>
                    </DisplayLesson>
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
          <Button onClick={handleClose} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>

        </Container>
    );
}