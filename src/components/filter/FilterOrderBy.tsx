import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function FilterOrderBy() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
<div style={{backgroundColor: 'white'}}>
                    

                    <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                        <Typography variant="h6" gutterBottom component="div" sx={{mb:0}} >
                            Order by {"(descending)"}
                        </Typography>
                    </Container>
                    
                    <Box sx={{ display: 'flex' }}>
      <FormControl size="small" fullWidth sx={{ m: 1 }}>
        <Select
          value={age}
          sx={{m:2}}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={10}>Price</MenuItem>
          <MenuItem value={20}>Rating</MenuItem>
        </Select>
      </FormControl>
    
     </Box>
                                   
                </div>

  );
}