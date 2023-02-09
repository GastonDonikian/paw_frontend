import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';

const DisplayMySubject = (props: any) => {
  
  let title : string = props.title;
  let description : string = props.description;
  let active: boolean = props.active;
  let changeStatus = props.changeStatus;
  let deleteContract = props.delete;
  let contract = props.contract
  return (
    
    /*<List sx={{ width: '100%', bgcolor: 'background.paper' }}> */
      <ListItem alignItems="flex-start">
        <ListItemText
          primary= {title}
          secondary={
            description
          }
        />
        
            {active ?
            <Button variant="contained" onClick={() => changeStatus(contract)} sx={{mt: 1,color: 'white', display: 'block', bgcolor: '#349AC2'}}>
                Put On Hold</Button> :
            <Button variant="contained" onClick={() => changeStatus(contract)}  sx={{mt:1, color: 'white', display: 'block', bgcolor: '#349AC2'}}>
                Restore subject</Button>}
        
        <Button variant="contained" onClick={() => deleteContract(contract)} sx={{mt:1, ml:2, color: 'white', display: 'block', bgcolor: '#DC3545'}}>Stop Teaching</Button>
      </ListItem>
      
      /*<Divider variant="inset" component="li" sx={{ml:0}} /> */
    
  );
}

export default DisplayMySubject;