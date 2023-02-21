import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {getIdFromSubjectUrl} from "../Services/SubjectService";

const DisplaySubject = (props: any) => {
  
  let title : string = props.title;
  let description : string = props.description;
  let subject : any = props.subject;
  const navigate = useNavigate()

  return (
    
    /*<List sx={{ width: '100%', bgcolor: 'background.paper' }}> */
      <ListItem alignItems="flex-start">
        <ListItemText
          primary= {title}
          secondary={
            description
          }
        />

            <Button onClick={() => {(navigate("/newContract/" + getIdFromSubjectUrl(subject.url)))}}variant="contained" sx={{mt: 1,color: 'white', display: 'block', bgcolor: '#349AC2'}}>
                Teach subject</Button> 
        
        
        
        
      </ListItem>
      
      /*<Divider variant="inset" component="li" sx={{ml:0}} /> */
    
  );
}

export default DisplaySubject;