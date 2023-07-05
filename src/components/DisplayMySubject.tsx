import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material';
import {intl} from "../i18n/i18n";

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
                {intl.formatMessage({ id: 'put_on_hold'})}</Button> :
            <Button variant="contained" onClick={() => changeStatus(contract)}  sx={{mt:1, color: 'white', display: 'block', bgcolor: '#349AC2'}}>
                {intl.formatMessage({ id: 'restore_subject'})}</Button>}
        
        <Button variant="contained" onClick={() => deleteContract(contract)} sx={{mt:1, ml:2, color: 'white', display: 'block', bgcolor: '#DC3545'}}>{intl.formatMessage({ id: 'stop_teaching'})}</Button>
      </ListItem>
      
      /*<Divider variant="inset" component="li" sx={{ml:0}} /> */
    
  );
}

export default DisplayMySubject;