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

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
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
            
          <Tab label="Requests" {...a11yProps(0)} />
          <Tab label="In Progress" {...a11yProps(1)} />
          <Tab label="Finished" {...a11yProps(2)} />
          <Tab label="Cancelled" {...a11yProps(3)} />
        </Tabs>
        
            {//requests
            value === 0 && (
              <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>

                  <DisplayLesson name="juan" surname="perez" email="email">
                      <RedButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Reject student</RedButton>
                      <GreenButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Accept student</GreenButton>
                  
                  </DisplayLesson>

                  <DisplayLesson name="juan" surname="perez" email="email">
                      <RedButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Reject student</RedButton>
                      <GreenButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Accept student</GreenButton>
                  </DisplayLesson>
              </List>
          )}

          {//in progress
          value === 1 && (
              <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>

                  <DisplayLesson name="juan" surname="perez" email="email">
                      <RedButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Cancel lesson</RedButton>
                      <BlueButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Finish lesson</BlueButton>
                      <GreenButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Go to class</GreenButton>
                  </DisplayLesson>
              </List>
          )}
          {//finished
          value === 2 && (
              <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>

                  <DisplayLesson name="juan" surname="perez" email="email">
                  <Typography gutterBottom component="div" sx={{ mb: 0, fontStyle:'italic' }}>
                            Left a review:
                        </Typography>
                        <Rating name="read-only" value={3} readOnly />
                        <Typography gutterBottom component="div" sx={{ mb: 0 }}>
                            es muy mala
                        </Typography>
                  </DisplayLesson>
              </List>
          )}
          { // cancelled
          value === 3 && (
              <List sx={{ pb: 2, pl: 2, pr: 2, width: '100%', bgcolor: 'background.paper' }}>

                  <DisplayLesson name="juan" surname="perez" email="email">
                  <RedButton variant="outlined" sx={{ mt: 1, ml: 2, }}>Delete lesson</RedButton>
                      <GreenButton variant="outlined" sx={{ mt: 1, ml: 2, }}>New lesson</GreenButton>
                  </DisplayLesson>
              </List>
          )}
   </Container>
      
     
     
    );
}