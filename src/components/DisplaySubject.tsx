import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';

const DisplaySubject = (props: any) => {
  
  let title : string = props.title;
  let description : string = props.description;


  return (
    
    /*<List sx={{ width: '100%', bgcolor: 'background.paper' }}> */
      <ListItem alignItems="flex-start">
        <ListItemText
          primary= {title}
          secondary={
            description
          }
        />

            <Button variant="contained" sx={{mt: 1,color: 'white', display: 'block', bgcolor: '#349AC2'}}>
                Teach subject</Button> 
        
        
        
        
      </ListItem>
      
      /*<Divider variant="inset" component="li" sx={{ml:0}} /> */
    
  );
}

export default DisplaySubject;