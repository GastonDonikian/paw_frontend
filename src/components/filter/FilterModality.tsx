import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import {CardActionArea, Grid, Button, CardActions} from '@mui/material';
import '../../App.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FilterModality() {
    
    const [state, setState] = React.useState({
        inPerson: false,
        remote: false,
    });
    
    const modalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
        ...state,
        [event.target.name]: event.target.checked,
        });
    };
    
    const { inPerson, remote } = state;
   
    return (
        <div style={{backgroundColor: 'white'}}>
                    

                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{mb:0}} >
                                Modality
                            </Typography>
                        </Container>
                        
                        <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={inPerson} onChange={modalityChange} name="inPerson" />
            }
            label="In person"
          />
          <FormControlLabel
            control={
              <Checkbox checked={remote} onChange={modalityChange} name="remote" />
            }
            label="Remote"
          />
         
        </FormGroup>
      </FormControl>
        
         </Box>
                                       
                    </div>
    );
}