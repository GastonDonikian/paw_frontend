import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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