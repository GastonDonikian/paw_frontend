import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const DisplayListItem = (props: any) => {
  
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
        
      </ListItem>
      
      /*<Divider variant="inset" component="li" sx={{ml:0}} /> */
    
  );
}

export default DisplayListItem;